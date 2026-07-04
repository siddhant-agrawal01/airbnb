import { CreateBookingDTO } from '../dto/booking.dto';
import { confirmBooking, createBooking, createIdempotencyKey, finalizeIdempotencyKey, getIdempotencyKeyWithLock } from '../repositories/booking.repository';
import { BadRequestError, InternalServerError, NotFoundError } from '../utils/errors/app.error';
import { generateIdempotencyKey } from '../utils/generateIdempotencyKey';
import { Prisma } from '../generated/prisma/client';

import prismaClient from '../prisma/client';

export async function createBookingService(createBookingDTO: CreateBookingDTO) {

    const bookingResource = `hotel:${createBookingDTO.hotelId}`;

    const booking = await createBooking({
        userId: createBookingDTO.userId,
        hotelId: createBookingDTO.hotelId,
        totalGuests: createBookingDTO.totalGuests,
        bookingAmount: createBookingDTO.bookingAmount,
    });

    const idempotencyKey = generateIdempotencyKey();

    await createIdempotencyKey(idempotencyKey, booking.id);

    return {
        bookingId: booking.id,
        idempotencyKey: idempotencyKey,
    };
}
// Todo: explore the function for potential issues and improvements
export async function confirmBookingService(idempotencyKey: string) {

    return await prismaClient.$transaction(async (tx: Prisma.TransactionClient) => {

        const idempotencyKeyData = await getIdempotencyKeyWithLock(tx, idempotencyKey);

        if (!idempotencyKeyData || !idempotencyKeyData.bookingId) {
            throw new NotFoundError('Idempotency key not found');
        }

        if (idempotencyKeyData.finalized) {
            throw new BadRequestError('Idempotency key already finalized');
        }

        const booking = await confirmBooking(tx, idempotencyKeyData.bookingId);
        await finalizeIdempotencyKey(tx, idempotencyKey);

        return booking;

    });
}
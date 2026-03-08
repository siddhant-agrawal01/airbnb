import Hotel from "../db/models/hotel";
import { createHotelDTO } from "../dto/hotel.dto";

 
 export async function createHotel(hotelData:createHotelDTO){
    const hotel = await Hotel.create({
        name: hotelData.name,
        address: hotelData.address,
        location: hotelData.location,
        rating: hotelData.rating,
        ratingCount: hotelData.ratingCount,
        createdAt: new Date(),
        updatedAt: new Date(),
    });

    console.log(`hotel created ${hotel.id}`);
    return hotel;
 }

 export async function getHotelById(id:number){
    const hotel =await Hotel.findByPk(id)
if(!hotel){
    console.log(`hotel with id ${id} not found`);
    throw new Error(`hotel with id ${id} not found`);
}
    return hotel;
 }
import { NextFunction, Request, Response } from "express";
import { createHotelService, deletHotelService, getAllHotelsService, getHotelByIdService } from "../services/hotel.services";


export async function createHotelHandler(req: Request, res: Response, next: NextFunction) {

    //calling the service layer
    const hotelResponse = await createHotelService(req.body)

    res.status(201).json({
        message: "Hotel created successfully",
        data: hotelResponse,
        success: true
    })

}

export async function getHotelByIdHandler(req: Request, res: Response, next: NextFunction) {
    const hotelResponse = await getHotelByIdService(Number(req.params.id))

    res.status(200).json({
        message: "Hotel fetched successfully",
        data: hotelResponse,
        success: true
    })
}

export async function getAllHotelsHandler(req: Request, res: Response, next: NextFunction) {
    const hotelsResponse = await getAllHotelsService()

    res.status(200).json({
        message: "Hotels fetched successfully",
        data: hotelsResponse,
        success: true
    })
}

export async function deleteHotelHandler(req: Request, res: Response, next: NextFunction) {
    const hotelsResponse = await deletHotelService(Number(req.params.id))

    res.status(200).json({
        message: "Hotel deleted successfully",
        data: hotelsResponse,
        success: true
    })
}
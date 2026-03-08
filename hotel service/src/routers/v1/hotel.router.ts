import { get } from "http";
import { createHotelHandler, getHotelByIdHandler } from "../../controllers/hotel.controller";
import express from 'express'
import { validateRequestBody } from "../../validators";
import { hotelSchema } from "../../validators/hotel.validator";

const hotelRouter = express.Router();
hotelRouter.post('/',validateRequestBody(hotelSchema),createHotelHandler)
hotelRouter.get('/:id',getHotelByIdHandler)

export default hotelRouter
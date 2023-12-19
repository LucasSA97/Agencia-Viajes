import express  from "express";
import { paginaInicio, paginaTestimonios, paginaViajes, paginaNosotros, paginaDetalleViaje } from "../controllers/paginasController.js";

const router = express.Router()


router.get('/', paginaInicio)

router.get('/nosotros', paginaNosotros)

router.get('/viajes', paginaViajes)

router.get('/viajes/:viaje', paginaDetalleViaje)

router.get('/testimonios', paginaTestimonios)

export default router;
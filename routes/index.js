import express  from "express";
import { paginaInicio, paginaTestimonios, paginaViajes, paginaNosotros, paginaDetalleViaje } from "../controllers/paginasController.js";
import { guardarTestimonio } from "../controllers/testimoniosController.js"

const router = express.Router()


router.get('/', paginaInicio)

router.get('/nosotros', paginaNosotros)

router.get('/viajes', paginaViajes)

router.get('/viajes/:slug', paginaDetalleViaje)

router.get('/testimonios', paginaTestimonios)

router.post('/testimonios', guardarTestimonio)

export default router;
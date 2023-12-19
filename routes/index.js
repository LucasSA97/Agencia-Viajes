import express  from "express";
import { paginaInicio, paginaTestimonios, paginaViajes, paginaNosotros } from "../controllers/paginasController.js";

const router = express.Router()


router.get('/', paginaInicio)

router.get('/nosotros', paginaNosotros)

router.get('/viajes', paginaViajes)

router.get('/testimonios', paginaTestimonios)

export default router;
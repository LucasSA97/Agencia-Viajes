import express  from "express";

const router = express.Router()


router.get('/', (req, res) => {

    res.render('inicio', {
        pagina: 'Inicio'
    })
})

router.get('/nosotros', (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
})
router.get('/viajes', (req, res) => {
    res.render('viajes', {
        pagina: 'Viajes'
    })
})
router.get('/testimonios', (req, res) => {
    res.render('testimonios', {
        pagina: 'Testimonios'
    })
})

export default router;
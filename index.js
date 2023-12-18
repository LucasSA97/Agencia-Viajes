import express  from "express";
import router from "./routes/index.js";

//Definimos el puerto
const app = express();

//Habilitar PUG
app.set('view engine', 'pug')

//Obtener año actual
app.use( (req, res, next) => {
    const year = new Date()
    res.locals.actualYear = year.getFullYear()
    res.locals.nombreSitio = "Agencia de viajes";
    next()
    
})

//Definir la carpeta public
app.use(express.static('public'))

//Agregamos el router
app.use('/', router)

const port = process.env.PORT || 4000
app.listen(4000);
import { Testimonios } from "../models/Testimonios.js";
const guardarTestimonio = async (req , res) => {

    //Validamos
    const { nombre, correo, mensaje } = req.body;
    const errores = []

    if(nombre.trim() === ""){
        errores.push({mensaje: 'El nombre esta vacio'})
    }
    if(correo.trim() === ""){
        errores.push({mensaje: 'El correo esta vacio'})

    }
    if(mensaje.trim() === ""){
        errores.push({mensaje: 'El mensaje esta vacio'})

    }
    if(errores.length > 0){
        //Mostramos los errores
        res.render('testimonios', {
            pagina: 'Testimonios',
            errores,
            nombre,
            correo,
            mensaje
        })
    } else {
        //Almacenamos en la base de datos
        try {
            await Testimonios.create({
                nombre,
                correo,
                mensaje
            })
            res.redirect('/')
        } catch (error) {
            console.log(error)
        }
    }
}

export { guardarTestimonio }
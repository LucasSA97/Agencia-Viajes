import { Viaje } from "../models/Viajes.js";
import { Testimonios } from '../models/Testimonios.js';

const paginaInicio = async (req, res) => {

    const promises = [];

    promises.push(Viaje.findAll({
        limit: 3
    }));

    promises.push(Testimonios.findAll({
        limit: 3
    }));

    //Consultamos 3 viajes del modelo viaje
    try {
        const resultado =  await Promise.all(promises);
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimonios: resultado[1]
        })
    } catch (error) {
        console.log(error)
    }



    // try {
        // pasar al promise
       

    //     console.log(resultado[0])

    //     res.render('inicio', {
    //         viajes : resultado[0],
    //         testimoniales: resultado[1],
    //         clase : 'home',
    //         page: 'Inicio',
    //     })
    // } catch (error) {
    //     console.log(error);
    // }

}

const paginaNosotros = (req, res) => { 
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}
const paginaTestimonios = async (req, res) => { 
    try {
        const testimonios = await Testimonios.findAll()
        res.render('testimonios', {
            pagina: 'testimonios',
            testimonios
        });
    } catch (error) {
        console.log(error)
    }
}

const paginaViajes = async  (req, res) => { 
    // Consultar BD 
    const viajes = await Viaje.findAll();
    
    
    res.render('viajes', {
        pagina: 'Proximos Viajes', 
        viajes,
    });
}

// const paginaTestimoniales =  async (req, res)  => {
     
//     try {
//         const testimoniales = await Testimonial.findAll();
//         res.render('testimoniales', {
//             testimoniales,
//             page: 'Testimoniales', 
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }


// Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {

    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne( { where : { slug } });

        res.render('viaje', {
            pagina: 'Información Viaje', 
            viaje
        })
    } catch (error) {
        console.log(error);
    }
}


export {
    paginaInicio, 
    paginaNosotros,
    paginaViajes,
    paginaTestimonios,
    paginaDetalleViaje
}
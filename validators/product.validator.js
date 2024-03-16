import { checkSchema } from "express-validator";

export const postProductValidator = checkSchema(
    {
        name: {
            errorMessage : 'Nombre no valido',
            notEmpty : true,
            isLength : {
                errorMessage: 'El tamaño debe ser minimo un caracter',
                options: {min: 1, max: 100}   
            }
        },
        value:{
            matches:{options: /^[0-9]+%/ },
            errorMessage: 'Valor no valido'
        }
    
    },
    [
        "body"
    ]

);
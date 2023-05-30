const validation  = (edad)  =>{
    return edad >= 18 && edad <= 70 
}



const validationN = (inputs) => {
    let val = {}
    
    if(!inputs.nombre){
        val.nombre = 'no existe nombre'
    }
    
    if(inputs.nombre.length >= 10){
        val.apellido = 'nombre largo'
    }
    
    return val
    
}

export default  validationN;

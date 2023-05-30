import React, {useState} from 'react';
import validationN from './validation';



const App = () => {

    const arr = ['soltero', 'casado','union libre'];
    const [form,setForm] = useState({
        nombre:"",
        apellido:"",
        edad: "",
        nacionalidad:"",
        estatus: ""

    })
    const [validation,setValidation] = useState({
        nombre:"",
        apellido:"",
        edad: "",
    })

    function onChange(e){
        setValidation(
            validationN({
                ...form,
                [e.target.name]: e.target.value
            })
        )
        setForm({
            ...form,
            [e.target.name]: e.target.value,
            
        })        
    }

    function onCheck(e){
        setForm({
            ...form,
            estatus: [...form.estatus,e.target.value][0]
            
        })
    }

    console.log(form);


    

    return(
        <div style={{ direction:"column", alignItems:"center" }}>
            <form>
                <label>Nombre</label>
                <input 
                    type="text" 
                    name='nombre'
                    onChange={onChange}
                    >
                </input>
                <p style={{ color: "red" }}>{validation.nombre && validation.nombre}</p>

                <label>Apellido</label>
                <input 
                    type="text" 
                    name='apellido'
                    onChange={onChange}
                    >
                    
                </input>

                <label>Edad</label>
                <input 
                    type="number" 
                    name='edad'
                    onChange={onChange}
                    >
                    
                </input>

                <label>Pais</label>
                <select name='nacionalidad' onChange={onChange}>
                    <option value="mex"> Mexicana</option>
                    <option value="esp"> Española </option>
                    <option value="eua"> Estados Unidos </option>
                    <option value="ita"> Italia </option>
                </select>
                
                <label>Estatus</label>
                <div>
                    {
                        arr.map( arr => {
                            return(
                                <label>
                                    {arr}
                                    <input 
                                        type="checkbox" 
                                        value={arr}
                                        onChange={onCheck}
                                    />
                                </label>
                                    
                            )
                        })
                    
                    }
                    
                </div>
                <button>Enviar</button>
            </form>
        </div>
    )
}


export default App;
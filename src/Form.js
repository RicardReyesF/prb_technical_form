import React from 'react'
import { useForm } from 'react-hook-form'
import validation from './validation';


export const Form = () => {
    const arr = ['soltero', 'casado','union libre'];
    const {register, handleSubmit, formState: {errors}} = useForm();

    function onSubmit(formData){
        console.log(formData);
    }
    return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
                <label>Nombre</label>
                <input 
                    type="text" 
                    name='nombre'
                    {...register('nombre',{
                        required: true,
                    })}
                    >
                </input>
                {errors.nombre?.type === 'required' && <p style={{ color:'red'}}>Se requiere el nombre</p>}

                <label>Apellido</label>
                <input 
                    type="text" 
                    name='apellido'
                    {...register('apellido',{
                        maxLength:10
                    })}
        
                    >
                    
                </input>
                {errors.apellido?.type === 'maxLength' && <p style={{ color:'red'}}>El apellido es de menos de 10 caracteres</p>}

                <label>Edad</label>
                <input 
                    type="text" 
                    name='edad'
                    {...register('edad',{
                        validate: validation
                    })}
                    >
                    
                </input>
                {errors.edad?.type === 'validate' && <p style={{ color:'red'}}>No estas en edad </p> }

                <label>Email</label>
                <input 
                    type="text"
                    name='email'
                    {...register('email',{
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                    })}
                    >
                    
                </input>
                {errors.email?.type === 'pattern' && <p style={{ color:'red'}}>El email no es correcto</p>} 

                <label>Pais</label>
                <select name='nacionalidad' {...register('nacionalidad',)}>
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
                                        {...register('estatus')}
                            
                                    />
                                </label>
                                    
                            )
                        })
                    
                    }
                    
                </div>
                <button type='submit'>Enviar</button>
            </form>
    </div>
    )
}

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../../models/estado.class';

const FormContacto = ({agregar}) => {
    const nomRef=useRef('');
    const apeRef=useRef('');
    const emaRef=useRef('');
    const teleRef=useRef(0);

    function addContacto(e){
        e.preventDefault();
        const newContacto = new Contacto(
            nomRef.current.value,
            apeRef.current.value,
            emaRef.current.value,
            teleRef.current.value,
            false,
        );
        agregar(newContacto);
    }

    return (
        <form onSubmit={addContacto} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nomRef} id='inputNom' type='text' className='form-control form-control-lg' required autoFocus placeholder='Nombre contacto'></input>
                <input ref={apeRef} id='inputApe' type='text' className='form-control form-control-lg' placeholder='Apellido Contacto'></input>
                <input ref={emaRef} id='inputEmail' type='text' className='form-control form-control-lg' required placeholder='Correo Contacto'></input>
                <input ref={teleRef} id='inputTel' type='number' className='form-control form-control-lg' placeholder='Teléfono Contacto'></input>
            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>Agregar Contacto</button>
        </form>
    );
}

FormContacto.propTypes={
    agregar:PropTypes.func.isRequired,
}

export default FormContacto;

import React, {useEffect}from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/estado.class';
import DetalleContacto from './detalleContacto';
import '../../styles/styles.scss';



const ComponenteContacto = ({contacto, estado, remover}) => {

    useEffect(() => {
        console.log('Create Task')
        return () => {
            console.log(`Task: ${contacto.nombre} is going to unmount`)
        }
    },[contacto]);

    
/**
 * Funcion que retorna un icono dependiendo
 * del estado de conexión
 */
    function IconoConexion(){
        if(contacto.conectado){
            return (<i onClick={()=>estado(contacto)} className='bi-toggle-on estado-action' style={{color: 'green'}}>ONLINE</i>)
        }else{
            return (<i onClick={()=>estado(contacto)} className='bi-toggle-off estado-action' style={{color: 'red'}}>OFFLINE</i>)
        }
    }

    return (
        <div>
            <div>
                <tr className='fw-normal'>
                    <th>
                        <span className='ms-2'>{contacto.nombre}{contacto.apellido}</span>
                        <button className='bi bi-eye-fill btn btn-primary'>Ver Contacto</button>
                    </th>
                    <td className='align-middle'>
                        <i className='bi-trash task-action estado-action' style={{color: 'tomato', fontSize:'20px'}} onClick={()=>remover(contacto)}></i>
                    </td> 
                    <td className='align-middle'>
                        {/*Ejecución de una función que
                        coloca un icono dependiendo de la tarea */}
                        {IconoConexion()}
                    </td>         
                </tr>
            </div>
        </div>
    );
};


ComponenteContacto.propTypes = {
    contacto:PropTypes.instanceOf(Contacto).isRequired,
    estado: PropTypes.func.isRequired,
    remover: PropTypes.func.isRequired,

};

export default ComponenteContacto;

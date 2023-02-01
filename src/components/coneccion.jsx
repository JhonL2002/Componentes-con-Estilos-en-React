import React, {useState} from 'react';
import { Contacto } from '../models/estado.class';
import ComponenteContacto from './pure/ejercicio1';
import FormContacto from './pure/forms/FormContacto';
 
const Coneccion = (props) => {

    const contacto1 = new Contacto('Jhon','Lopez','jhonf@gmail.com',3133731284,false);

    const [contactos, setContacto] = useState([contacto1]);

    function cambiarEstado(contacto){
        console.log('Complete this Task:', contacto);
        const index = contactos.indexOf(contacto);
        const tempCont = [...contactos];
        tempCont[index].conectado=!tempCont[index].conectado;
        setContacto(tempCont);
    }

    function borrarContacto(contacto){
        alert(`El Contacto ${contacto.nombre} ha sido eliminado`);
        const index = contactos.indexOf(contacto);
        const tempCont = [...contactos];
        tempCont.splice(index,1);
        setContacto(tempCont);
    }

    function agregarContacto(contacto){
        alert(`El Contacto ${contacto.nombre} ha sido agregado`);
        const index = contactos.indexOf(contacto);
        const tempCont = [...contactos];
        tempCont.push(contacto);
        setContacto(tempCont);
    }
    
    return (
        <div>
        <FormContacto agregar={agregarContacto}></FormContacto>
            <div className='card-body' data-mdb-perfect-srcollbar='true' style={ {position:'relative',height:'400px'} }>
                <table>
                    <thead>
                        <tr>
                            <th scope='col'>Contacto</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>
                        { contactos.map((contacto, index) => {
                            return(
                                <ComponenteContacto
                                    key={index}
                                    contacto={contacto}
                                    estado={cambiarEstado}
                                    remover={borrarContacto}>
                                </ComponenteContacto>
                                    
                            )
                        }
                        )}
                        </td>
                    </tbody>
                </table>
                <br></br>
            </div>
        </div>
        
    );
    
};

export default Coneccion;


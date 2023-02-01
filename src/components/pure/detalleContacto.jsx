import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/estado.class';

const DetalleContacto= (contacto)=> {


    return (
        <div>
             <div>
            <div>
                <tr className='fw-normal'>
                    <th>
                        <h1>Hola</h1>
                    </th>        
                </tr>
            </div>
        </div>
        </div>
    );
}
DetalleContacto.propTypes = {
    contacto:PropTypes.instanceOf(Contacto).isRequired,

};

export default DetalleContacto;

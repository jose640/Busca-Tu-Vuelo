import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { obtenerAereolinea} from "../redux/actions";
import { Formulario } from './Formulario';


export const Lines = () => {
    const dispatch = useDispatch();
    const airline = useSelector((store) => store.aereolinea.aereolinea);
    const list = airline.slice(0, 5);
    console.log(list);

    const [ form, setForm ] = useState(false);
    const [ dateLine, setDateLine ] = useState({});

    const abrirForm = (line1) => {
        setForm(true); 
        setDateLine(line1);
        console.log(line1);
    };

    const cerrarForm = () => {
        setForm(false);
    };
    

    useEffect(() => {
       dispatch(obtenerAereolinea());
    }, [dispatch]);

  


    return (
        <>
            <div className="container">
                <ul className="col-11 d-flex justify-content-center ">
                    {list ? list.map(line => (
                        <li key={line.callsign}>
                            <button onClick={() => abrirForm(line)}>
                                {line.airline_name}
                            </button>                        
                        </li>
                    )): null}
                </ul>           
            </div>
            <Formulario  estado={form} date={dateLine} cerrar={cerrarForm} />
        </>
    );
}


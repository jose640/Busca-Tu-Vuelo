import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';


export const NavBar = () => {
   
    return (
        <>
            <nav className="navbar d-flex navbar-expand-lg navbar-light bg-dark text-white">
                <div className="p-2 col-12 col-lg-10">
                    <div className="row">
                        <h3>Busca tu Vuelo</h3>
                    </div>
                </div>
                <div className="col-6 col-lg-2">
                    <Link className="btn btn-outline-light" to="/aereolineas">
                        Aerolineas   
                    </Link>                    
                </div>
            </nav>
        </>
    );
}


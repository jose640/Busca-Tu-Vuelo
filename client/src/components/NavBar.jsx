import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


export const NavBar = () => {
   
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <div className="col-4">
                    <div className="row">
                        <h1>Busca tu Vuelo</h1>
                    </div>
                </div>
                <div className="dropdown col-7">
                    <button className="btn btn-secondary" >
                        Aerolineas   
                    </button>                    
                </div>
            </nav>
        </>
    );
}


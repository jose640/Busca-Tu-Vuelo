import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { obtenerAereolinea} from "../redux/actions";
import { useEffect, useState } from "react";

export const Line = () => {
    const dispatch = useDispatch();
    const airline = useSelector((store) => store.aereolinea.aereolinea);
    console.log(airline);

    useEffect(() => {
       dispatch(obtenerAereolinea());
    }, []);


    return (
        <div>
            
        </div>
    );
}


import { configureStore } from "@reduxjs/toolkit";
import { contadorReducer } from "./reducer";

export const store = configureStore({

    reducer: contadorReducer,

    preloadedState:{
        datos: [],
        darkMode: false,
        datosPais:[]
    }

    
})
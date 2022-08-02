import { ACUMULAR, BARRA_BUSCAR, BUSCAR_PAIS, CHANGE_BG_COLOR, CHANGE_STATE, DATOS } from "./type";

export const contadorReducer = (state, action) => {

 let productos;   
    switch(action.type){

        case ACUMULAR:

        return{...state, contador: state.contador + 1}

        case DATOS:

        return{...state, datos: action.datos}

        case CHANGE_BG_COLOR:
        console.log('action', state)
        return{...state, darkMode: !state.darkMode}
        
        case CHANGE_STATE:
            productos = action.api;
            let data = productos.filter(datos => datos.region === action.datos);
            return {...state, datos: data}

        case BARRA_BUSCAR:
            productos = action.api;
            // console.log('reducer', productos)
            let buscar = productos.filter(datos => datos.nativeName === action.datos || datos.name === action.datos || datos.alpha2Code === action.datos);
            // console.log('action', data);
            return {...state, datos: buscar}

        case BUSCAR_PAIS:
            
        return{...state, datosPais: action.datos}
            


        default: 
        return state
    }
}
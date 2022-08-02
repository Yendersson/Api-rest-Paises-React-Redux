import { ACUMULAR, BARRA_BUSCAR, BUSCAR_PAIS, CHANGE_BG_COLOR, CHANGE_STATE, DATOS } from "./type";

export const actionAcumular = paso =>{
    return{
        type: ACUMULAR,
        paso
    }
}

export const actionDatos = datos =>{
    return{
        type: DATOS,
        datos
    }
}

export const actionChangeColor = paso => {
    return{
        type: CHANGE_BG_COLOR,
        paso
    }
}

export const actionChangeState = (datos, api) => {
    return{
        type: CHANGE_STATE,
        datos,
        api
    }
}

export const actionBuscar = (datos, api) => {
    return{
        type: BARRA_BUSCAR,
        datos,
        api
    }
}

export const actionPais = (datos) =>{
    return{
        type: BUSCAR_PAIS,
        datos 
    }
}
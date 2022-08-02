import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { actionAcumular, actionBuscar, actionChangeState, actionDatos, actionPais } from "./state/action";
import { NavLink } from "react-router-dom";
import './Main.css'

class Main extends React.Component{

    constructor(props){
        super(props)

        this.onchange = this.onchange.bind(this);
        this.onchangeBarra = this.onchangeBarra.bind(this);
        this.countrySelected = this.countrySelected.bind(this)

    }

    async componentDidMount(){
        let datos = await this.obtenerDatos()
        console.log('datos', datos)
        this.props.setDatos(datos)
    }

    async obtenerDatos(){
        let {data: datosNuevos} = await axios('https://restcountries.com/v2/all/')
        
        return datosNuevos
    }

     async onchange(e){
        let api = await this.obtenerDatos()
        let datos = e.target.value;
        this.props.modifiedDatos(datos, api)
        
    }

    async onchangeBarra(e){
        let api = await this.obtenerDatos()
        let datos = e.target.value;

        datos === ''? this.props.setDatos(api):  this.props.buscarDatos(datos, api)
        
    }

    async countrySelected(e){
        let {data:api} = await axios('https://restcountries.com/v2/name/'+ e.target.dataset.pais)
        // console.log('response', api)

        this.props.buscarPais(api)
    }



    render(){
        let {datos, darkMode} = this.props
        console.log(darkMode);
        return(
            <div>
                <main>
                    <div className="flex-input">
                        <input type="search" name="" id="buscador" placeholder="Search for a Country..."  onChange={this.onchangeBarra}/>
                        <select name="" id="filtrar" onChange={this.onchange}>
                            <option value="">Filter by Region</option>
                            <option value="Americas">America</option>
                            <option value="Asia">Asia</option>
                            <option value="Africa">Africa</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
                        </select>
                    </div>

                    {datos.length=== 0 && 
                        <div className="notFound">
                            <h2>Not Found</h2>
                        </div>
                    }

                    {datos.length >0 &&
                    
                    
                    <div className="flex-flags">
                        {datos.map((data, index)=> {
                            return(
                                <div className="card" style={{
                                    background: darkMode? 'hsl(209, 23%, 22%)': 'white'
                                        }} key={index}>
                                        <img src={data.flags.svg} alt={data.name}/>
                                        <h2>{data.name}</h2>
                                        <p><span>Population:</span> {data.population}</p>
                                        <p><span>Region:</span> {data.region}</p>
                                        <p><span>Capital:</span> {data.capital}</p>
                                    <NavLink to={'country'} data-pais={data.name}  onClick={this.countrySelected}>See Country </NavLink>
                                    </div>
                            )
                        })}                    

                    </div>
                    }

                </main>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    datos : state.datos,
    darkMode: state.darkMode
})

const mapDispatchToProps = dispatch=>({
    setContador : ()=>{
        dispatch(actionAcumular())
    },

    setDatos: (datos)=>{
        dispatch(actionDatos(datos))
    },

    modifiedDatos: (datos, api) => {
        dispatch(actionChangeState(datos, api))
    },

    buscarDatos: (datos, api) => {
        dispatch(actionBuscar(datos, api))
    },

    buscarPais: (datos) => {
        dispatch(actionPais(datos))
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
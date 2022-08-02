import './Country.css'
import { connect } from "react-redux"


function Country(props){

    let {datosPais}= props
    
    console.log(datosPais)
    return(
        <main>
        <div className="contenido">
        <button id="regresar"><span>Back</span></button>

        {datosPais.map((data, index) =>{
            return(

        <section key={index}>   
            <img src={data.flag} alt=""/>
            <div>
                <h2>{data.name}</h2>
                <div className="flex-informacion">
               <div> 
                <p><span>Native Name:</span>{data.nativeName} </p>
                <p><span>Population:</span>{data.population} </p>
                <p><span>Region:</span> {data.region}</p>
                <p><span>Sub Region:</span> {data.subregion}</p>
                <p><span>Capital:</span> {data.capital}</p>
                </div>

            <div>
                <p><span>Top Level Domain:</span>{data.topLevelDomain[0]}</p>
                <p><span>Currencies:</span> </p>
                <p><span>Languages:</span> </p>
            </div>
        </div>
        

        <h3>Border Countries:</h3>
        <div className="flex-borders">
   
        <div><p></p></div>
        
        </div></div>
    </section>
            )
        })}
            
        </div>
    </main>
    )
}

// export default Country;
const mapStateToProps = state =>({
    datosPais: state.datosPais
})

export default connect(mapStateToProps)(Country);
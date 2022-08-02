import {NavLink} from "react-router-dom"

function Botones(){
        return(
            <div>
                <ul>
                    <li><NavLink to={'buscar'}>Buscar</NavLink></li>
                    <li><NavLink to={'country'}>Pais</NavLink></li>
                </ul>
            </div>
        )
}

export default Botones
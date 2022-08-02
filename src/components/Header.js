import './Header.css'
import React from 'react';
import { connect } from 'react-redux';
import { actionChangeColor } from './state/action';

class Header extends React.Component{

    state = {

    }

    cambiarColor(){
        this.props.setBgColor()
    }
   
    render(){
    // console.log(darkMode)
    let {darkMode} = this.props
    return (
        <header style={{backgroundColor: darkMode? 'hsl(209, 23%, 22%)': 'white'}}>
        <h1>Where in the world?</h1>
        <div id="dark-mode"><span id="mode" onClick={()=>this.cambiarColor()}>Dark Mode</span></div>
    </header>
    )
}
}


// export default Header
const mapStateToProps = state=>({
    darkMode: state.darkMode
})

const mapDispatchToProps = dispatch =>({
    setBgColor: ()=>{
        dispatch(actionChangeColor())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
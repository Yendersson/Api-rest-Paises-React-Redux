import Main from "./components/Main";
import Header from "./components/Header";
import { connect } from "react-redux";
import Country from "./components/Country";
import {BrowserRouter} from 'react-router-dom'
import { Routes, Route } from "react-router";
import Botones from "./components/state/opciones";

 function App(props)  {
  
  let {darkMode} = props
    return (
      <div className="App" style={{
        backgroundColor: darkMode? 'hsl(207, 26%, 17%)': 'hsl(0, 0%, 98%)', 
        color:darkMode? 'white': 'hsl(200, 15%, 8%)'
        }}>
        <Header/>

        <BrowserRouter>

        {/* <Main/> */}
        {/* <Botones/> */}

            <Routes>

            <Route index element={<Main/>}/>


            <Route path="buscar" element={<Main/>}/>
            <Route path="country" element={<Country/>}/>

        </Routes>
        </BrowserRouter>
      </div>
    );
  }

// export default App;

const mapStateToProps = state =>({
  darkMode: state.darkMode
})

export default connect(mapStateToProps)(App)


 
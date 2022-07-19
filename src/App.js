// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React , {useState} from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  //Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode,setmode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

const showAlert = (message , type) =>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() =>{
        setAlert(null);
      } , 1300);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#042743';
      document.title = "TextUtils - DarkMode";
      showAlert("Dark mode has been Enabled!", "success");
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
      document.title = "TextUtils - LightMode";
      showAlert("Light mode has been Enabled!", "success")
    }
  }

  return (
<>
  <Router>
  <Navbar title = "TextUtils" aboutText = "About" mode = {mode}  toggleMode = {toggleMode}></Navbar>
  <Alert alert = {alert}/>

  <div className="container my-3">

          <Routes>
            <Route exact path="/about" element={<About/>}>
            </Route>
            <Route exact path="/" element={<Textform showAlert = {showAlert} heading = "enter the text to analyze :"  mode = {mode}/>}>
            </Route>
          </Routes>
        
  </div>
</Router>

{/* <Textform showAlert = {showAlert} heading = "enter the text to analyze :"  mode = {mode}/> */}
         
  {/* <About/> */}

</>
  );
}

export default App;
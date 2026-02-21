import React, { useState } from 'react'
// import './App.css'
import Navbar from './Components/Navbar';
import About from './Components/About';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import { BrowserRouter , Routes  , Route , Link } from 'react-router-dom';
// import Home from '../../../REACT/my-react-app/src/Home';

const Home = () => {

  let [mode,setMode] = useState('light')

  let [alert,setAlert] = useState(null)

  const showAlert = (message , type) =>{

    setAlert({
      msg:message,
      type: type
    })

    setTimeout(() =>{
      setAlert(null)
    },3000)
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled" , "success")
      // for dynamically changing the title
      // document.title = 'TextUtils - Dark Mode'
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled" , "success")
      // for dynamically changing the title
      // document.title = 'TextUtils - Light Mode'
    }
  }


  return (
    <>
      
      {/* <BrowserRouter> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my">

        {/* <Switch> */}
          {/* <Route path="/about">
            <About/>
          </Route>

          <Route path="/">
            <TextForm showAlert={showAlert} heading="Enter your text to analyse" mode={mode} />
          </Route> */}
        {/* </Switch> */}

        <TextForm showAlert={showAlert} heading="Enter your text to analyse" mode={mode} />

        <About/>
      </div>
      {/* <About></About> */}
      {/* </BrowserRouter> */}

    </>
  );
}

export default Home
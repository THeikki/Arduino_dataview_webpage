import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Temperatures from './components/Temperatures';
//import { useState } from 'react';

function App() {

  const [temperatures, setTemperature] = useState([])

  useEffect(() => {
    getTemperatures()
  },)

  const getTemperatures = () => {
    axios
      .get("http://localhost:5000/api/arduinoData/temperatures")
      .then(res => {
        setTemperature(res.data)
      })
      .catch(error => {
        console.log(error)
      })

  }
  
  const deleteTemperature = (id) => {
    
    axios.delete("http://localhost:5000/api/arduinoData/temperatures/" + id)
    .then(res => {
      console.log(res.data)
      //getPersons()
    })
    .catch(err => {
      console.log(err)

    })
  }


  return (
    <div className="App">
      <Temperatures temperatures={temperatures} handleClick={deleteTemperature}/>
    </div>
  );
}

export default App;

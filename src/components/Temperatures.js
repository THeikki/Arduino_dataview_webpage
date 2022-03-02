import Temperature from "./Temperature"
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Temperatures = () => {

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
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    if(temperatures.length === 0) {
        return (
            <div>
                <p> Ei mitattuja lämpötila-arvoja! </p>
            </div>
        )
    }

    return (
        <div>
            <h1>Arduino lämpötilat</h1>
            {
                temperatures.map(temperature =>
                    <Temperature key={temperature._id} temperature={temperature} handleClick={deleteTemperature}/>
                )
            }
        </div>
    )


}

export default Temperatures
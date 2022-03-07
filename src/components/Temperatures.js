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
            <>
                <h1>Arduino lämpötilat</h1>
                <p> Ei mitattuja lämpötila-arvoja! </p>
            </>
        )
    }

    return (
        <div>
            <h1>Arduino lämpötilat</h1>
            <table>
                <thead>
                    <tr>
                    <th>Aika</th>
                    <th>Lämpötila</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        temperatures.map(temperature =>
                            <Temperature key={temperature._id} temperature={temperature} handleClick={deleteTemperature}/>
                        )
                    }
                </tbody>
            </table>
        </div>
    )


}

export default Temperatures
import ArduinoData from "./ArduinoData"
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Arduino = () => {

    const [values, setValues] = useState([])

    useEffect(() => {
        getArduinoValues()
    },)

    const getArduinoValues = () => {
        axios
        .get("http://localhost:5000/api/arduinoData/data")
        .then(res => {
            setValues(res.data)
        })
        .catch(error => {
            console.log(error)
        })

    }
    
    const deleteValue = (id) => {
        
        axios.delete("http://localhost:5000/api/arduinoData/data/" + id)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    if(values.length === 0) {
        return (
            <>
                <h1>Arduino mittausdata</h1>
                <p> Ei mitattua data-arvoja! </p>
            </>
        )
    }

    return (
        <div>
            <h1>Arduino mittausdata</h1>
            <table>
                <thead>
                    <tr>
                    <th>Aika</th>
                    <th>Lämpötila</th>
                    <th>Kaasuarvo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        values.map(data =>
                            <ArduinoData key={data._id} data={data} handleClick={deleteValue}/>
                        )
                    }
                </tbody>
            </table>
        </div>
    )


}

export default Arduino
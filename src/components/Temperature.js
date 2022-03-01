const Temperature = ({ handleClick, temperature }) => {

    return (
        <div>
            <table >
                <thead>
                    <tr>
                        <th> Aika </th>
                        <th> Lämpötila </th>
                    </tr>   
                </thead>
                <tbody>
                    <tr>
                        <td> { temperature.timestamp } </td>
                        <td> { temperature.value } </td>
                        <td>
                            <button onClick={() => handleClick(temperature._id)}>Poista</button>
                        </td>
                        
                    </tr>  
                </tbody>
                
            </table>    
        </div>
    )
}

export default Temperature
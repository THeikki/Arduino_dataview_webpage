const ArduinoData = ({ handleClick, data }) => {

    return (
        <tr key={data._id}>
            <td>{data.timestamp}</td>
            <td>{data.temperature}</td>
            <td>{data.gas}</td>
            <td>
                <button onClick={() => handleClick(data._id)}>Poista</button>
            </td>
        </tr>
    )
}

export default ArduinoData
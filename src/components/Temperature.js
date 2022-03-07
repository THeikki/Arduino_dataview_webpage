const Temperature = ({ handleClick, temperature }) => {

    return (
        <tr key={temperature._id}>
            <td>{temperature.timestamp}</td>
            <td>{temperature.value}</td>
            <td>
                <button onClick={() => handleClick(temperature._id)}>Poista</button>
            </td>
        </tr>
    )
}

export default Temperature
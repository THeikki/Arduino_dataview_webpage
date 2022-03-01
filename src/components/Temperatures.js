import Temperature from "./Temperature"

const Temperatures = ({ temperatures, handleClick }) => {
    if(temperatures.length === 0) {
        return (
            <div>
                <p> Ei mitattuja lämpötila-arvoja! </p>
            </div>
        )
    }

    return (
        <div>
            {
                temperatures.map(temperature =>
                    <Temperature key={temperature._id} temperature={temperature} handleClick={handleClick}/>
                )
            }
        </div>
    )


}

export default Temperatures
import {useState} from "react";

const AddWeight = () => {
    const [name, setName] = useState('')
    const [sets, setSets] = useState('')
    const [reps, setReps] = useState('')
    const [weight, setWeight] = useState('')

    const endpoint = "http://localhost:3100/weight"

    const handleSubmit = async () => {
        let data = {
            'name': name,
            'sets': sets,
            'reps': reps,
            'weight': weight
        }
        const response = await fetch(endpoint, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data),
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    const divStyle = {
        padding: '1.5em',
    }

    const inputStyle = {
        padding: '2px',
        border: '1px solid'
    }

    return (
        <div style={divStyle}>
            <h3>Add new a new workout</h3>
            <form onSubmit={handleSubmit}>
                <label style={{'width': '2em'}}>Name:</label><br />
                <input style={inputStyle} type="text" placeholder="Name of exercise" required onChange={(event) => { setName(event.target.value) }}/><br />
                <label>Sets:</label><br />
                <input style={inputStyle} type="text" placeholder="Number of sets" required onChange={(event) => { setSets(event.target.value) }}/><br />
                <label>Reps:</label><br />
                <input style={inputStyle} type="text" placeholder="Number of reps" required onChange={(event) => { setReps(event.target.value) }}/><br />
                <label>Weight:</label><br />
                <input style={inputStyle} type="text" placeholder="Weight" required onChange={(event) => { setWeight(event.target.value) }}/><br /><br />
                <input style={inputStyle} type="submit" value="Submit" />
            </form>
        </div>
    );
}


export default AddWeight;

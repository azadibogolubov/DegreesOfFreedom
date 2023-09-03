import {useEffect, useState} from "react";

const ShowWeight = () => {
    const [weight, setWeight] = useState([])
    const endpoint = "http://localhost:3100/weight"

    useEffect(() => {
        (async () => {
            const data = await fetch(endpoint, {
                method: 'get',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                },
                'credentials': 'same-origin'
            })
                .then(res => res.json())

            setWeight(data)
        })()
    }, [])

    return (
            weight.map((w) => (
                <div>
                    <b>Id:</b>{w._id}<br/>
                    <b>Name:</b> {w.name}<br/>
                    <b>Sets:</b> {w.sets}<br/>
                    <b>Reps:</b> {w.reps}<br/>
                    <b>Weight:</b> {w.weight}<br/>
                    <b>Date:</b> {w.date}<br/><br/>
                </div>
            ))
    );
}

export default ShowWeight;

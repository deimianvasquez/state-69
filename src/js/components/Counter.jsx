import { useState, useEffect } from "react"

const initiaNames = [
    "Alejandro García",
    "Isabella Martínez",
    "Mateo Rodríguez",
    "Sofía López",
    "Sebastián Hernández",
    "Lucía Pérez",
    "Diego Sánchez",
    "Valentina Gómez",
    "Nicolás Díaz",
    "Camila Torres",
    "Samuel Ruiz",
    "Mariana Morales",
    "Daniel Castro",
    "Elena Ortiz",
    "Joaquín Reyes"
];

export function Counter() {
    // state count

    const [count, setCount] = useState(10)
    const [names, setNames] = useState(initiaNames)
    const [nameRandom, setNameRandom] = useState("")


    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    function randomName() {

        let random = names[Math.floor(Math.random() * names.length)]
        setNameRandom(random)
    }



    // useeffects

    useEffect(() => {
        randomName()
    }, [])


    useEffect(() => {
        if (count % 3 == 0) {

            randomName()
        }

    }, [count])


    return (
        <div className="container border py-5">
            <div className="row">
                <div className="col-12">
                    <h1>{count}</h1>

                    <button
                        onClick={increment}
                    >Sumar 1</button>

                    <button
                        onClick={decrement}
                    >Restar 1</button>
                </div>
                <div className="col-12 py-3">
                    <p>
                        {nameRandom}
                    </p>
                    <button
                        onClick={randomName}
                    >Name Random</button>
                </div>
            </div>
        </div>
    )
}


import { Button } from "../components/Button"
import TitleMain from "../components/TitleMain"

export function Home() {
    // javascript puro y duro

    function handleFunction(name) {

        alert(`Hola ¿qué tal ${name}?`)

    }

    const productos = [
        { id: 1, name: "Laptop Pro 14", category: "Computadoras" },
        { id: 2, name: "iPhone 15", category: "Smartphones" },
        { id: 3, name: "Monitor 4K", category: "Periféricos" },
        { id: 4, name: "Teclado Mecánico", category: "Periféricos" },
        { id: 5, name: "Samsung Galaxy S23", category: "Smartphones" },
        { id: 6, name: "MacBook Air", category: "Computadoras" },
        { id: 7, name: "Mouse Inalámbrico", category: "Periféricos" },
        { id: 8, name: "iPad Air", category: "Tablets" },
        { id: 9, name: "Sony WH-1000XM5", category: "Audio" },
        { id: 10, name: "AirPods Pro", category: "Audio" },
        { id: 11, name: "Kindle Paperwhite", category: "E-readers" },
        { id: 12, name: "Apple Watch Series 9", category: "Wearables" },
        { id: 13, name: "Nintendo Switch", category: "Consolas" },
        { id: 14, name: "PlayStation 5", category: "Consolas" },
        { id: 15, name: "Cámara Canon EOS R6", category: "Fotografía" },
        { id: 16, name: "Trípode Profesional", category: "Fotografía" },
        { id: 17, name: "Disco Duro Externo 2TB", category: "Almacenamiento" },
        { id: 18, name: "Tarjeta MicroSD 256GB", category: "Almacenamiento" },
        { id: 19, name: "Silla Gamer", category: "Muebles" },
        { id: 20, name: "Escritorio Elevable", category: "Muebles" }
    ];

    return (
        <>
            <TitleMain
                text={"Este es mi primer propiedad"}
                classname={"text-danger"}
            />
            <h1>Hola ¿qué tal?</h1>

            <Button
                text="Alert"
                classname="btn btn-success mb-5"
                handleFunction={handleFunction}
            />

            <br />

            <Button
                text="Saluda en la console"
                classname="btn btn-outline-success mb-5"
                handleFunction={() => { console.log("Hola desde la console") }}
            />

            <br />
            <ul>
                {
                    productos.map((item, index, arr) => {
                        return (
                            <li
                                key={item.id}
                                onClick={() => alert(item.id)}
                            >{item.name}</li>
                        )
                    })
                }
            </ul >
            <br />

            <button
                onClick={() => handleFunction("Deimian")}
            >
                saludar
            </button>
        </>
    )
}

/*
    Explicar la carpeta mock
    Explicar como funciona el css en react
    Explicar los hooks
    Explicar el useState
    Explicar el useEffect
    Buscar más ejemplos de hooks usestate
    colocar el audio al hacer click

*/
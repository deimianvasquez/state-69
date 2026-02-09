import { Button } from "../components/Button"
import TitleMain from "../components/TitleMain"
import products from "../../../mocks/products.json"
import audioFile from "./t-rex-roar.mp3"
import externocleidomastoideo from "../../img/rigo-baby.jpg"
import { Counter } from "../components/Counter"

export function Home() {
    // javascript puro y duro

    function handleFunction(name) {
        alert(`Hola ¿qué tal ${name}?`)
    }


    function reproductor() {
        const exampleAudio = new Audio(audioFile)
        exampleAudio.play()
        console.log(exampleAudio)
    }

    return (
        <>

            <Counter />


            <h1 className="title-main">Hola ¿qué tal?</h1>
            <TitleMain
                text={"Este es mi primer propiedad"}
                classname={"text-danger"}
            />
            {/* colocar el audio al hacer click */}
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
            <button
                onClick={() => reproductor()}
                className="btn btn-danger"
            >
                reproductor
            </button>

            <img src={externocleidomastoideo} alt="" />

            <br />
            <ul>
                {
                    products.map((item, index, arr) => {
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


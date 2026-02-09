import "../../styles/components/titleMain.css"

function TitleMain(props) {
    return (
        <h1
            className={`title-main__title-main`}>{props.text}
        </h1>
    )
}

export default TitleMain

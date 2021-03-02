import history from "../../../../history"
import "./FormPostar.css"

export function FormPostar(){
    function publicarPost(){
        history.push("/")
    }
    return(
        <form className="form">
            <textarea type="text" className="texto" placeholder="O que deseja publicar? "/>
            <input type="submit" className="botao-publicar" onClick={publicarPost} value="Publicar"/>
        </form>
    )
}
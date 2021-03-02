import { Navegador } from "../../commom/Navegador/Navegador";
import { FormPostar } from "./FormPostar/FormPostar";
import "./PaginaPost.css"

export function PaginaPost(){
    return (
        <div className="pagina-post">
            <Navegador></Navegador>
            <FormPostar></FormPostar>
        </div>
    )
}
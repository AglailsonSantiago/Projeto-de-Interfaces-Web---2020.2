import { Navegador } from "../../commom/Navegador/Navegador";
import { Feed } from "../LinhaDoTempo/LinhaDoTempo";
import "./PaginaPrincipal.css";

export function PaginaPrincipal(){

    return(
        <div className="pagina-principal">
            <Navegador></Navegador>
            <Feed></Feed>
        </div>
    )
}
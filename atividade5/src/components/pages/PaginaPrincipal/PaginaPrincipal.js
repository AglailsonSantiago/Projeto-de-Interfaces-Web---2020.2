import { Navegador } from "../../commom/Navegador/Navegador";
import { Feed } from "../LinhaDoTempo/LinhaDoTempo";
import { Rodape } from "../../commom/Rodapé/Rodape";
import "./PaginaPrincipal.css";



export function PaginaPrincipal(){
    return(
        <div className="pagina-principal">
            <Navegador></Navegador>
            <Feed></Feed>
            <Rodape></Rodape>
        </div>
    )
}
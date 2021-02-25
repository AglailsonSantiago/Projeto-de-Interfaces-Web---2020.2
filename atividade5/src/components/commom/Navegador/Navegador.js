import { Link, NavLink } from "react-router-dom";
import "./Navegador.css";

export function Navegador(){

    return(
        <nav class="navegador">
            <a href="#" className="logo"><h2>Projeto</h2><div><h2>X</h2></div></a>
            <NavLink
            exact
                className="botao-nav"
                to="/">
                    Feed
            </NavLink>
            <NavLink
                className="botao-nav"
                to="/post">
                    Postar
            </NavLink>
            <NavLink
                className="botao-nav"
                to="/perfil">
                    Perfil
            </NavLink>
        </nav>
    )
}
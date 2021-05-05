import { Link, NavLink } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../../App'
import "./Navegador.css";

function NavegadorNaoLogado(){

    return(
        <nav className="navegador">
            <a href="#" className="logo"><h2>Projeto</h2><div><h2>X</h2></div></a>
            <NavLink
                exact
                className="botao-nav"
                to="/cadastro">
                    Cadastre-se
            </NavLink>
            <NavLink
                exact
                className="botao-nav"
                to="/login">
                    Login
            </NavLink>
        </nav>
    )
}

function NavegadorLogado({nome}){
    const { setAuth } = useContext(AuthContext)
    return(
        <nav className="navegador">
            <a href="#" className="logo"><h2>Projeto</h2><div><h2>X</h2></div></a>
            <NavLink
                exact
                className="botao-nav"
                to="/">
                    Feed
            </NavLink>
            <NavLink
                exact
                className="botao-nav"
                to="/post">
                    Postar
            </NavLink>
            
            <div className="botao-nav">
                    {nome}
            </div>
            
            <NavLink
                exact
                className="botao-nav"
                to="/login"
                onClick={() => {
                    setAuth({ token: null, nome: null })
                }}
            >
                    Logout
            </NavLink>
        </nav>
    )
}

export function Navegador(){
    const {auth} = useContext(AuthContext);

    return (
        <div>
            {
                auth.token == null || auth.token === "null" ? <NavegadorNaoLogado></NavegadorNaoLogado> :
                <NavegadorLogado nome={auth.nome} ></NavegadorLogado>
            }
        </div>
    )
    
}
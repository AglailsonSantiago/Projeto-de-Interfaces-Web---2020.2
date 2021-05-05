import { Navegador } from "../../commom/Navegador/Navegador";
import history from "../../../history"
import { useForm } from "react-hook-form";
import { LoginUser } from "../../../api/auth";
import { useContext } from "react";
import { AuthContext } from "../../../App"

import "./Login.css"

function FormLogin(){
    const {register, handleSubmit} = useForm();
    const auth = useContext(AuthContext);
    const submeter = (login_data) =>{
        LoginUser(login_data).then((response)=>{
            auth.setAuth({token: response.data.token, nome: response.data.nome});
            history.push("/");
        }).catch((error)=>{
            console.log(error)
        })
    }
    return(
        <form className="form" onSubmit={handleSubmit(submeter)}>
            <input type="email" name="email" className="texto" placeholder="user@email.com" ref={register}/>
            <input type="password" name="senha" className="texto" placeholder="senha" ref={register}/>
            <input type="submit" className="botao-publicar" value="Entrar"/>
        </form>
    )
}

export function PaginaLogin(){
    return(
        <div className="pagina-login">
            <Navegador></Navegador>
            <FormLogin></FormLogin>
        </div>
    )
}
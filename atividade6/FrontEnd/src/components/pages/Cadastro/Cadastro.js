import { Navegador } from "../../commom/Navegador/Navegador";
import { useForm } from "react-hook-form";
import { CadastroUser } from "../../../api/auth";
import history from "../../../history"
import "./Cadastro.css";

function FormCadastro(){
    const { register, handleSubmit } = useForm();
    const submeter = (usuario) => {
        CadastroUser(usuario).then((response) => {
            console.log(response);
            history.push("/login");
        }).catch((error) => {
            console.log(error);
        })
    };
    return(
        <form className="form" onSubmit={handleSubmit(submeter)}>
            <input type="text" name="nome" className="texto" placeholder="Nome" ref={register}/>
            <input type="email" name="email" className="texto" placeholder="user@email.com" ref={register}/>
            <input type="password" name="senha" className="texto" placeholder="senha" ref={register}/>
            <input type="submit" className="botao-publicar" value="Submeter"/>
        </form>
    )
}

export function PaginaCadastro(){
    return(
        <div className="pagina-cadastro">
            <Navegador></Navegador>
            <FormCadastro></FormCadastro>
        </div>
    )
}
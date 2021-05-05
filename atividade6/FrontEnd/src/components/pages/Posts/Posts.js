import "./Posts.css"
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { AuthContext } from '../../../App';
import Img from "../../commom/imagens/like.png"
import { CriarComentario } from '../../../api/comentarioApi';
import { ListarComentariosDoPost } from '../../../api/postApi';


function ListaComentarios(comentario) {

    return (
        <div className="list-comentarios">
            <div className="user-comentario">
                {comentario.name}
            </div>
            <div className="texto-comentario">
                {comentario.texto}
            </div>
        </div>
    
    )
}

function Comentarios(props){
    const {auth} = useContext(AuthContext)
    const { register, handleSubmit, reset } = useForm([]);
    const [comentarios, setComentarios] = useState([])

    function ComentariosDoPost(){

        ListarComentariosDoPost(auth.token, props.id).then(
            (response)=>{
                setComentarios(response.data)
            }
        ).catch(
            
            (error)=>{
                console.log(error)
            }
        )
    }

    useEffect(()=>{
        ComentariosDoPost()
    }, [])

    const adicionarComentario = (comentario) =>{
        CriarComentario(auth.token, comentario, props.id).then(
            (response) => {
                ComentariosDoPost()
                reset()
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
        
    }
    let lista = comentarios.map((comentario) => 
        <ListaComentarios key={comentario.id} texto={comentario.texto} name={comentario.nome_usuario}></ListaComentarios>
    )
    return(
        
        <div className="container-comentarios">
            {lista}
            <form className="comentar" onSubmit={handleSubmit(adicionarComentario)}>
                <input className="comentar-texto" type="text" name="texto" ref={register}/>    
                <button className="comentar-botao">Comentar</button>
            </form>
        </div>
    )
}

export function Post(props){
    const { auth } = useContext(AuthContext)
    const [count, setCount] = useState(0);

    const clickButton = () => {
        setCount(count + 1)
    }


    return(
        <div className="post">
            <div className="conteudo">
                <div className="user">
                    {props.usuario}
                </div>
                <div className="texto">
                    {props.texto}
                </div>
                <div className="caixa-likes">
                    <div className="likes">
                        {props.qtdLikes}
                        <span>{count} Likes</span>
                    </div>
                    <img src={Img} alt="Curtir"></img>
                    <button onClick={clickButton}>Curtir</button>
                </div>
                
            </div>        
             <center><h3>Comentários:</h3> </center>
            <Comentarios id={props.id} username={props.usuario} texto={props.texto} qtdLikes={0}></Comentarios>
        </div>
    )
}

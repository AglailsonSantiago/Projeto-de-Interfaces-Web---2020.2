import "./Posts.css"
import Img from "../../commom/imagens/like.png"

export function Post(props){
    return(
        <div className="post">
            <div className="conteudo">
                <div className="user">
                    {props.user}
                </div>
                <div className="texto">
                    {props.texto}
                </div>
                <div className="caixa-likes">
                    <div className="likes">
                        Likes: {props.likes}
                    </div>
                    <img src={Img} alt="Curtir"></img>
                    <button>Curtir</button>
                </div>
            </div>          
            <div className="container-comentarios">
                <h2>Comentarios</h2>
                <div className="list-comentarios">
                    <div className="comentario">
                        <div className="user-comentario">@user1000</div> 
                        <div className="texto-comentario">
                            Muito interessante meu amigo.
                        </div>
                    </div>
                    <div className="comentario">
                        <div className="user-comentario">@user2000</div> 
                        <div className="texto-comentario">
                            Eu não sabia.
                        </div>
                    </div>
                    <div className="comentario">
                        <div className="user-comentario">@user3000</div> 
                        <div className="texto-comentario">
                            Que legal!
                        </div>
                    </div>
                    <div className="comentar">
                        <input className="comentar-texto" placeholder="Escreva um comentário"/>
                        <input className="comentar-botao" type="submit" value="Comentar"/>
                    </div>
                </div>              
            </div>           
        </div>
    )
}
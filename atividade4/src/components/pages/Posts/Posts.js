import "./Posts.css"
import Img from "../../commom/imagens/like.png"

export function Post(props){
    return(
        <div className="post">
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
    )
}
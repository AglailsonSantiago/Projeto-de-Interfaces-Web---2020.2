import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../App';
import { ListarPosts } from '../../../api/postApi'
import {Post} from "../Posts/Posts"
import "./LinhaDoTempo.css"

export function Feed(){
    const {auth} = useContext(AuthContext);

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
            ListarPosts(auth.token).then(
                (response) => {
                    setPosts(response.data);
                } 
            ).catch(
                (error => {
                    console.log(error);
                })
            )
        }, []
    )

    const postagens = posts.map((post)=>
            <Post
                id={post.id}
                usuario={post.nome_usuario}
                texto={post.texto}
                qtdLikes={post.qtdLikes}
                comentarios={post.comentarios}>
            </Post>

    )

    return (
        <div className="feed">
            {postagens}
        </div>
    )

}
import axios from "axios";

export function ListarPosts(token){
    return axios({
        method:"GET",
        url:"http://localhost:8393/posts",
        headers:{
            "token": token,
        }
    })
}

export function CriarPost(token, post){
    return(
        axios({
            method: "POST",
            url: "http://localhost:8393/posts",
            data:post,
            headers:{
                "token": token,
            },
            
        })
    );
}

export function ListarComentariosDoPost(token, idPost){
    return axios({
        method: "GET",
        url: "http://localhost:8393/posts/"+idPost+"/comentarios",
        headers: {
            "token": token,
        }
    })
}
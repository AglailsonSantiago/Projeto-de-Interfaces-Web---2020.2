import axios from "axios";

export function ListarComentario(idPost,token){
    return axios({
        method:"GET",
        url:"http://localhost:8393/api/posts/"+idPost+"/comentarios",
        headers:{
            "token": token,
        }
    })
}

export function CriarComentario(token, comentario, idPost){
    return(
        axios({
            method: "POST",
            url: "http://localhost:8393/comentarios",
            headers:{
                "token": token,
            },
            data:{
                texto: comentario.texto,
                id_post: idPost
            }
        })
    );
}
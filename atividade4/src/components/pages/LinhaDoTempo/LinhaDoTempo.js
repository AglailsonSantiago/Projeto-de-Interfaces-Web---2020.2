import {Post} from "../Posts/Posts"
import "./LinhaDoTempo.css"

export function Feed(){
    let posts = {
        postsList: [
            {
                id: "1",
                texto: "Post é o conteúdo criado e publicado em alguma plataforma da internet." +
                        "Essa publicação pode ter o formato de imagem, vídeo, texto, áudio ou todos eles juntos." +
                        "As principais plataformas de publicação de posts são as redes sociais e os blogs.",
                likes: "100",
                user: "@user1"
            },
            {
                id: "2",
                texto: "Post é o conteúdo criado e publicado em alguma plataforma da internet." +
                        "Essa publicação pode ter o formato de imagem, vídeo, texto, áudio ou todos eles juntos." +
                        "As principais plataformas de publicação de posts são as redes sociais e os blogs.",
                likes: "200",
                user: "@user2"
            },
            {
                id: "3",
                texto: "Post é o conteúdo criado e publicado em alguma plataforma da internet." +
                        "Essa publicação pode ter o formato de imagem, vídeo, texto, áudio ou todos eles juntos." +
                        "As principais plataformas de publicação de posts são as redes sociais e os blogs.",
                likes: "300",
                user: "@user3"
            },
            {
                id: "4",
                texto: "Post é o conteúdo criado e publicado em alguma plataforma da internet." +
                        "Essa publicação pode ter o formato de imagem, vídeo, texto, áudio ou todos eles juntos." +
                        "As principais plataformas de publicação de posts são as redes sociais e os blogs.",
                likes: "400",
                user: "@user4"
            },
            {
                id: "5",
                texto: "Post é o conteúdo criado e publicado em alguma plataforma da internet." +
                        "Essa publicação pode ter o formato de imagem, vídeo, texto, áudio ou todos eles juntos." +
                        "As principais plataformas de publicação de posts são as redes sociais e os blogs.",
                likes: "500",
                user: "@user5"
            }
        ]
    }
    let listaPosts = posts.postsList.map((post) =>
        <Post id={post.id} user={post.user} texto={post.texto} likes={post.likes}></Post>
    )

    return (
        <div className="feed">
            {listaPosts}
        </div>
    )

}
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { CriarPost } from "../../../../api/postApi"
import { AuthContext } from "../../../../App"
import history from "../../../../history"
import "./FormPostar.css"

export function FormPostar(){
    const { auth } = useContext(AuthContext)
    const { register, handleSubmit } = useForm()

    
    function publicarPost(post){
       CriarPost(auth.token, post).then((response) => {
            history.push("/")
        }).catch((error) => {
            console.log(error)
        })
        
    }
    return(
        <form className="form" onSubmit={handleSubmit(publicarPost)}>
            <textarea type="text" className="texto" placeholder="O que deseja publicar? " name="texto" ref={register}/>
            <input type="submit" className="botao-publicar" value="Publicar"/>
        </form>
    )
}
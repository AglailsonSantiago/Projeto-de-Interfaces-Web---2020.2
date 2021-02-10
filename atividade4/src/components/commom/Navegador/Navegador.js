import "./Navegador.css";

export function Navegador(){
    const BotaoNav = (props) => (
        <a href="#" className={props.botaoClass}>{props.nomeBotao}</a>
    )

    return(
        <nav class="navegador">
            <a href="#" className="logo"><h2>Projeto-</h2><div><h2>X</h2></div></a>
            <BotaoNav nomeBotao="Feed" botaoClass="botao-feed"></BotaoNav>
            <BotaoNav nomeBotao="Perfil" botaoClass="botao-perfil"></BotaoNav>
            <BotaoNav nomeBotao="Logout" botaoClass="botao-logout"></BotaoNav>
        </nav>
    )
}
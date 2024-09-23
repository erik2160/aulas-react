function UserDetails(props) {
    let message = "";

    if (props.idade >= 18) {
        message = "Pode tirar habilitação.";
    } else {
        message = "Não pode tirar habilitação";
    }
    
    return (
        <div>
            <p>Nome: {props.name} | Idade: {props.idade} | Profissão: {props.profissao} | {message}</p>
        </div>
    )
}

export { UserDetails };
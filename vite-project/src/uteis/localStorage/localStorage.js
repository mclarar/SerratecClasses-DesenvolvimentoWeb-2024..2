//O localStorage é uma API de armazenamento de dados no navegador
//permite salvar pares de chave-valor no navegador do usuário

//os dados persistem no navegador mesmo após o fechamento do navegador ou aba
//útil pra salvar dados que precisam ser mantidos entre sessões

//chave e valor 
//chave: string; valor: variável que vai ser settada ou resgatada

export const salvarToken =(token)=>{
    localStorage.setItem('token', token);
}

export const obterToken =()=>{
    const token = localStorage.getItem('token');

    return token ? token : 'não foi possível obter o token';
}

const dadosUsuario = {
    nome,
    urlAvatar,
    tipoPerfil
}

export const salvarPerfilUsuario = (dadosUsuario) =>{
    localStorage.setItem('dadosUsuario', JSON.stringfy(dadosUsuario));
}

export const obterPerfilUsuario = () =>{
    const perfilUsuario = localStorage.getItem(dadosUsuario)
    return {
        perfilUsuario : JSON.parse(dadosUsuario)
    }
}

export const limparLocalStorage = ()=>{
    localStorage.clear();
}


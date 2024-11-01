var tokenDecodificado = null;
try {
  const resposta = await api.post('autenticacao', {
    email,
    senha,
  });

  if (resposta.status === 200) {
    tokenDecodificado = jwt_decode(resposta.data.token);
    tokenDecodificado['token'] = resposta.data.token;
    return tokenDecodificado;
  } else {
    return false;
  }
} catch (error) {
  return false;
}
function status(request, response) {
  response.status(200).json({ chave: "Tudo esta ocorrendo corretamente" });
}

export default status;

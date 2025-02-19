function status(request, response) {
  response.status(200).json({ chave: "valor teste não" });
}

export default status;

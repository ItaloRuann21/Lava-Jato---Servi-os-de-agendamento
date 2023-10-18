const tipoServico = localStorage.getItem("servicosimples.title");
const data = localStorage.getItem("lavajato-data");
const hora = localStorage.getItem("lavajato-hora");

if (tipoServico && data && hora) {
  // Use && em vez de &
  const mensagemPreSelecionada = `Olá, eu quero agendar meu serviço:\nTipo de serviço: ${tipoServico}\nData marcada: ${data}\nHorário marcado: ${hora}`;

  // Substitua o número de telefone abaixo pelo número correto
  const numeroTelefone = "5579991212965";

  const mensagemCodificada = encodeURIComponent(mensagemPreSelecionada);

  const linkWhatsApp = `https://wa.me/${numeroTelefone}?text=${mensagemCodificada}`;
  const linkElement = document.getElementById("btn3");
  linkElement.href = linkWhatsApp;
} else {
  console.log("Dados necessários não estão definidos no localStorage.");
}

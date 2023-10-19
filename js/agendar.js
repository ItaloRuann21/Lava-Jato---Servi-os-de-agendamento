const tipoServico = localStorage.getItem("servicosimples.title");
const data = localStorage.getItem("lavajato-data");
const hora = localStorage.getItem("lavajato-hora");

if (tipoServico && data && hora) {
  // Use && em vez de &
  const mensagemPreSelecionada = `Olá, eu quero agendar meu serviço:\n*Tipo de serviço:* ${tipoServico}\n*Data marcada:* ${data}\n*Horário marcado:* ${hora}`;

  // Substitua o número de telefone abaixo pelo número correto
  const numeroTelefone = "557996541447";

  const mensagemCodificada = encodeURIComponent(mensagemPreSelecionada);

  const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text="${mensagemCodificada}"`;
  const linkElement = document.getElementById("btn3");
  linkElement.href = linkWhatsApp;
} else {
  console.log("Dados necessários não estão definidos no localStorage.");
}

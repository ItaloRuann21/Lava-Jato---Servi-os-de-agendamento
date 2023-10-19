const dataService = document.querySelector("#data");
const horaService = document.querySelector("#time");

dataService.addEventListener("change", function (event) {
  localStorage.setItem("lavajato-data", event.target.value);
  const dataFormatada = formatarData(event.target.value);
  const serviceData = document.querySelector("#service-data");
  serviceData.innerHTML = `<b>Data marcada:</b> ${dataFormatada}`;
});

horaService.addEventListener("change", function (event) {
  localStorage.setItem("lavajato-hora", event.target.value);
  const horaFormatada = formatarHora(event.target.value);
  const serviceHora = document.querySelector("#service-hora");
  serviceHora.innerHTML = `<b>Horário marcado:</b> ${horaFormatada}`;
});

// Função para formatar a data no formato "dd/mm/aaaa"
function formatarData(data) {
  const partesDaData = data.split("-");
  const dia = partesDaData[2];
  const mes = partesDaData[1];
  const ano = partesDaData[0];
  return `${dia}/${mes}/${ano}`;
}

// Função para formatar a hora no formato "hh:mm"
function formatarHora(hora) {
  return hora;
}

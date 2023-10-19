const data = document.querySelector("#data");
const hora = document.querySelector("#time");

data.addEventListener("change", function (event) {
  localStorage.setItem("lavajato-data", event.target.value);
});

hora.addEventListener("change", function (event) {
  localStorage.setItem("lavajato-hora", event.target.value);
  const serviceData = document.querySelector("#service-data");
  const serviceHora = document.querySelector("#service-hora");
  serviceData.innerHTML = `<b>Data marcada:</b> ${localStorage.getItem(
    "lavajato-data"
  )}`;
  serviceHora.innerHTML = `<b>Horário marcado:</b> ${localStorage.getItem(
    "lavajato-hora"
  )}`;
});

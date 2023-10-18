const textServicoSimples = document.querySelector("#service");

textServicoSimples.innerHTML = `<b>Tipo</b>: ${localStorage.getItem(
  "servicosimples.title"
)}`;

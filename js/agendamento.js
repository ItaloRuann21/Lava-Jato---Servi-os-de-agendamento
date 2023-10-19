const textServicoSimples = document.querySelector("#header");

textServicoSimples.innerHTML = `${localStorage.getItem(
  "servicosimples.title"
)}`;

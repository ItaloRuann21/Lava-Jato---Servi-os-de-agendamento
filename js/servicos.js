const servicosCards = document.querySelectorAll(".card")

servicosCards.forEach((card) => {
  const button = card.querySelector(".btn")
  button.addEventListener("click", function () {
    const title = card.querySelector(".card-title")
    // Adiciona a verificação para evitar o erro de título nulo
    const titleText = title ? title.textContent : ""
    localStorage.setItem("servicosimples.title", titleText)
  })
})

// window.location.replace("http://127.0.0.1:5500/Pages/Cadastro.html");

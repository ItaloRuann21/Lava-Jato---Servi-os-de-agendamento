const servicosCards = document.querySelectorAll(".card");

servicosCards.forEach((card) => {
  const button = card.querySelector(".btn");
  button.addEventListener("click", function () {
    const title = card.querySelector(".card-title");
    localStorage.setItem("servicosimples.title", title.textContent);
  });
});

// window.location.replace("http://127.0.0.1:5500/Pages/Cadastro.html");

// Obtém o botão de logout pelo ID
const logoutButton = document.getElementById("logoutBtn")

// Adiciona um ouvinte de evento de clique no botão
logoutButton.addEventListener("click", function () {
  // Exibe a mensagem "Fazendo Logout..." na tela
  const messageElement = document.createElement("div")
  messageElement.textContent = "Fazendo Logout..."
  messageElement.style.position = "fixed"
  messageElement.style.top = "50%"
  messageElement.style.left = "50%"
  messageElement.style.transform = "translate(-50%, -50%)"
  messageElement.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
  messageElement.style.color = "white"
  messageElement.style.padding = "20px"
  messageElement.style.borderRadius = "5px"
  document.body.appendChild(messageElement)

  // Aguarda 3 segundos antes de realizar o logout
  setTimeout(() => {
    // Remove as chaves 'Auth' e 'Servico' do Local Storage
    localStorage.removeItem("Auth")
    localStorage.removeItem("Servico")

    // Remove a mensagem da tela após 3 segundos
    document.body.removeChild(messageElement)

    // Redireciona para a tela desejada após a remoção das chaves
    window.location.href = "../Pages/Login.html"
  }, 3000)
})

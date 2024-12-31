

console.log("Service worker is running...");

// Escutando o evento de instalação
self.addEventListener("install", (event) => {
  console.log("Extension installed.");
});

// Escutando mensagens de outras partes da extensão
self.addEventListener("message", (event) => {
  console.log("Message received in background:", event.data);
});

// Exemplo: escutando cliques no ícone da extensão
chrome.action.onClicked.addListener((tab) => {
  console.log("Extension icon clicked!");
});
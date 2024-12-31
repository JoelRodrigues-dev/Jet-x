const form = document.querySelector("#chatForm");
const input = document.querySelector("#messageInput");
const output = document.querySelector("#chatOutput");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const userMessage = input.value.trim();
    if (!userMessage) return;

    createSentMessage(userMessage);

    try {
        const response = await fetch("http://localhost:3000/chatbot", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: userMessage }),
        });

        if (response.ok) {
            const data = await response.json();
            const chatbotReply = data.messages[0].content;
            createReceivedMessage(chatbotReply);
        } else {
            throw new Error(`Erro do servidor: ${response.status}`);
        }
    } catch (error) {
        console.error("Erro:", error);

        const errorMessage = document.createElement("p");
        errorMessage.textContent = "Erro ao se comunicar com o chatbot.";
        errorMessage.classList.add("error-message"); // Classe para estilizar erros, caso queira
        output.appendChild(errorMessage);
    }

    input.value = "";
});

function createSentMessage(userMessage) {
    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message-container", "sent-message");

    const messageBubble = document.createElement("div");
    messageBubble.classList.add("message-bubble", "sent-bubble");

    const messageText = document.createElement("p");
    messageText.classList.add("message-text", "sent-text");
    messageText.textContent = userMessage;

    messageBubble.appendChild(messageText);
    messageContainer.appendChild(messageBubble);
    output.appendChild(messageContainer);
}

function createReceivedMessage(messageContent) {
    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message-container", "received-message");

    const avatar = document.createElement("img");
    avatar.classList.add("avatar");
    avatar.src = "https://ui-avatars.com/api/?name=Chatbot"; 
    avatar.alt = "Chatbot";

    const messageBubble = document.createElement("div");
    messageBubble.classList.add("message-bubble", "received-bubble");

    const messageText = document.createElement("p");
    messageText.classList.add("message-text", "received-text");
    messageText.textContent = messageContent;

    messageBubble.appendChild(messageText);
    messageContainer.appendChild(avatar);
    messageContainer.appendChild(messageBubble);
    output.appendChild(messageContainer);
}
const { sendMessageToChatbase } = require("../services/chatbaseService");

const handleChatbotMessage = async (req, res) => {
    const { message } = req.body;

    if (typeof message !== "string" || message.trim() === "") {
        return res.status(400).json({ error: "Mensagem inválida." });
    }

    try {
        const chatbotReply = await sendMessageToChatbase(message);
        res.json({ messages: [{ content: chatbotReply }] });
    } catch (error) {
        console.error("Erro no controlador:", error.message);
        res.status(500).json({ error: "Erro ao se comunicar com o chatbot." });
    }
};

module.exports = { handleChatbotMessage };

const axios = require("axios");
const { CHATBASE_API_URL, CHATBASE_TOKEN, CHATBOT_ID } = require("../config/dotenv");

const sendMessageToChatbase = async (userMessage) => {
    try {
        const response = await axios.post(
            CHATBASE_API_URL,
            {
                chatbotId: CHATBOT_ID,
                messages: [
                    { role: "user", content: userMessage }
                ]
            },
            {
                headers: {
                    Authorization: `Bearer ${CHATBASE_TOKEN}`,
                    "Content-Type": "application/json",
                },
            }
        );

        if (!response.data || !response.data.text) {
            throw new Error("Estrutura inesperada na resposta da API.");
        }
        return response.data.text;
    } catch (error) {
        console.error("Erro ao comunicar com a API do Chatbase:", error.response?.data || error.message);
        throw new Error("Erro ao comunicar com o chatbot.");
    }
};

module.exports = { sendMessageToChatbase };
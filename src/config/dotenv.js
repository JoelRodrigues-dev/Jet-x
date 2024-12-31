const dotenv = require("dotenv");

dotenv.config();




module.exports = {
    CHATBASE_API_URL: process.env.CHATBASE_API_URL,
    CHATBASE_TOKEN: process.env.CHATBASE_TOKEN,
    CHATBOT_ID: process.env.CHATBOT_ID,
    PORT: process.env.PORT || 3000,
};
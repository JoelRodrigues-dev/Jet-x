const express = require("express");
const  {handleChatbotMessage}  = require("../controllers/chatbotController");

const router = express.Router();

router.post("/chatbot", handleChatbotMessage);

module.exports = router;
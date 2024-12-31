const express = require("express");
const cors = require('cors')
const { PORT} = require("./config/dotenv");
const chatbotRoutes = require("./routes/chatbotRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(chatbotRoutes);


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});


module.exports = app;

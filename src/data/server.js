const express = require("express");
const app = express();
const axios = require("axios");
const cors = require('cors')
const bodyParser = require("body-parser");


require('dotenv').config();

app.use(cors())

app.use(express.static("public"));

app.use(bodyParser.json());


app.use(bodyParser.urlencoded({
    extended: true
}));


app.get("/", (request, response) => {
    response.send({
        status: "working"
    });
});

app.post("/send-message", async (request, response) => {
    try {
        if (request.body) {
            const message = request.body;
            console.log(message)
            let str = `<b>Сообщение с портфолио:</b>
<b>Имя</b>: ${message.name}
<b>Телефон</b>: ${message.phone}
<b>Сообщение</b>: ${message.message}
`;
            console.log(str)
            let telegram_url = encodeURI(
                `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage?chat_id=${process.env.CHAT_ID}&text=${str}&parse_mode=HTML`
            );
            const {
                data
            } = await axios.get(telegram_url);
            if (data.ok) {
                response.send({
                    status: "Отправлено",
                    details: data
                });
            } else throw "Что-то пошло не так";
        } else {
            response.status(400).send("Нет данных");
        }
    } catch (err) {
        response.status(400).send({
            status: "Ошибка",
            details: err
        });
    }
});




const PORT = 3000

const listen = app.listen(process.env.PORT || PORT, () => {
    console.log(`Your app is listening on port ${PORT}`);
});

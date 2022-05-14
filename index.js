import router from "./router.js"
import express from "express";
import cors from "cors";
import {Item} from "./Items/Items.js";
import {Checker} from "./Checker/Checker.js";
import {Parser} from "./Parser/Parser.js";
import {getNumber} from "./Utils/String.js";

const PORT = process.env.PORT || 80

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('static'))
app.use('/api', router)

app.post('/', (req,res) => {

    res.status(200).json('Сервер работает')
})

app.listen(PORT, async () => {
    const {resolve, html} = await Checker.createShop('https://www.mvideo.ru/playstation-4327/ps5-konsoli-8627', {})
    const {item} = Parser.target({
        html,
        target: ".product-title__text",
        values: ['В корзину'],
    })
    console.log(item)
    // console.log(resolve({inStock, price}))
})

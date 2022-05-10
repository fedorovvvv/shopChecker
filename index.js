import router from "./router.js"
import express from "express";
import cors from "cors";
import {Checker} from "./Checker/Checker.js";
import {CheckerController} from "./Checker/CheckerController.js";
import axios from "axios";
import {ItemsController} from "./Items/ItemsController.js";

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
})

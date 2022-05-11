import router from "./router.js"
import express from "express";
import cors from "cors";
import {Checker} from "./Checker/Checker.js";
import {CheckerController} from "./Checker/CheckerController.js";
import axios from "axios";
import {ItemsController} from "./Items/ItemsController.js";
import cloudscraper from "cloudscraper";
import {Item} from "./Items/Items.js";
import {ITEMS} from "./Stores/ItemsStore.js";

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
    // console.log(await Item.cInteres('Test', 'https://www.1c-interes.ru/catalog/podarki/figurka_boruto_boruto_with_marks_pop_animation_3_75_/').get())
    // console.log(await ItemsController.getAll(ITEMS))
})

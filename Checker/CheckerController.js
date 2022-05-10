import {ItemsController} from "../Items/ItemsController.js";

export class CheckerController {
    static async checkAll(req, res) {
        try {
            return res.json(await ItemsController.getAll())
        } catch (e) {
            res.status(500).json(e)
        }
    }
    static async checkFind(req, res) {
        try {
            return res.json(await ItemsController.find(req.query))
        } catch (e) {
            res.status(500).json(e)
        }
    }
}
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
            const items = await ItemsController.find(req.query) ?? []
            if (items[0]?.hasOwnProperty('get')) {
                return res.json(await ItemsController.getAll(items))
            }
            return res.json(items)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}
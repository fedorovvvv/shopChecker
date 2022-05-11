import {ITEMS} from "../Stores/ItemsStore.js";

export class ItemsController {
    static async getGetter(items = ITEMS) {
        return items.filter(item => item.get !== undefined).map(({get}) => get())
    }

    static async getAll(items = ITEMS) {
        return await Promise.all(await this.getGetter(items))
    }

    static findSite(site = '', items = ITEMS) {
        return items.filter(item => item.site === site)
    }

    static findName(name = '', items = ITEMS) {
        const str = (str) => {
            return str.toLowerCase().replace(/\s/g,'')
        }
        return items.filter(item => str(item.name).includes(str(name)))
    }

    static async findInStock(inStock = true, items = ITEMS) {
        return (await Promise.all(await this.getGetter(items))).filter(item => `${item.inStock}` === `${inStock}`);
    }

    static async find({site, name, stock}) {
        let items = ITEMS
        if (site) {
            items = this.findSite(site, items)
        }
        if (name) {
            items = this.findName(name, items)
        }
        if (stock) {
            items = await this.findInStock(stock, items)
        }
        return items
    }
}

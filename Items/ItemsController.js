import {ITEMS} from "../Stores/ItemsStore.js";
import {find} from "../Utils/String.js";

export class ItemsController {
    static async getGetter(items = ITEMS) {
        return items.filter(item => item.get !== undefined).map(({get}) => get())
    }

    static async getAll(items = ITEMS) {
        return await Promise.all(await this.getGetter(items))
    }

    static findSite(site = '', items = ITEMS) {
        return items.filter(item => find(item.site, site))
    }

    static findName(name = '', items = ITEMS) {
        return items.filter(item => find(item.name, name))
    }

    static findInStock(inStock = true, items = ITEMS) {
        return items.filter(item => `${item.inStock}` === `${inStock}`)
    }

    static findPrice(price= '0:100000', items = ITEMS) {
        return items.filter(({price:p}) => {
            const [from, to] = price.split(':').map(str => +str)
            if (from !== undefined || to !== undefined) {
                return p >= from && p <= to;
            } else if (from !== undefined) {
                return p >= from
            } else if (to !== undefined) {
                return p <= to
            }
            return false
        })
    }

    // static async find

    static async find({site, name, inStock, price}) {
        let items = ITEMS
        if (site) {
            items = this.findSite(site, items)
        }
        if (name) {
            items = this.findName(name, items)
        }
        if (inStock || price) {
            items = await this.getAll(items)
            inStock && (items = this.findInStock(inStock, items))
            price && (items = this.findPrice(price, items))
        }
        return items
    }
}

import {Checker} from "../Checker/Checker.js";

export class Item {
    static getTemplate(newFields = {}) {
        return {
            ...{
                site: '',
                name: '',
                url: '',
                inStock: false,
                price: '0',
            }, ...newFields
        }
    }

    static decoratorGet(func, obj = {}) {
        const get = func
        return {
            ...{get}, ...obj
        }
    }

    static store({site = '', name = '', url = ''}, checker = url => {}) {
        const template = this.getTemplate({
            site,
            name,
            url
        })
        checker = checker.bind(Checker)
        return this.decoratorGet(async () => {
            const {inStock = false, price = ''} = await checker(url)
            return this.getTemplate({
                ...template,
                ...{
                    inStock,
                    price,
                }
            })
        }, template)
    }

    static videoigrNet(name = 'item', url = '') {
        return this.store({name, url, site: 'videoigr.net'}, Checker.videoigrNet)
    }
    static cInteres(name = '', url = '') {
        return this.store({name, url, site: '1c-interes.ru'}, Checker.cInteres)
    }
}
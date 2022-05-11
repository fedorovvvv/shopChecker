import axios from "axios";
import {Parser} from "../Parser/Parser.js";
import cloudscraper from "cloudscraper";
import {getNumber} from "../Utils/String.js";

export class Checker {
    static getTemplate(newFields = {}) {
        return {
            ...{
                inStock: false,
                price: 'Not Found',
            }, ...newFields
        }
    }
    static async getHtml(url = '', newParams = {}) {
        const params = {
            ...{
                cloud: false
            }, ...newParams
        }
        try {
            let html = ''
            let status = '200'
            if (params.cloud) {
                html = await cloudscraper.get(url)
            } else {
                const res = await axios.get(url)
                html = res.data
                status = res.status
            }
            return {
                html,
                status
            }
        } catch(e) {
            const {status, statusCode} = e.response
            return {
                error: this.getTemplate(),
                status: status ?? statusCode,
            }
        }
    }

    static async createShop(url = '', newParams = {}) {
        const params = {
            ...{
                cloud: false
            }, ...newParams
        }
        const {html, error} = await this.getHtml(url, params)
        const reject = (error = {}) => {
            return error
        }
        const resolve = (fields = {}) => {
            if (fields.error || error) {
                return fields.error ?? error
            }
            return this.getTemplate(fields)
        }
        return {
            resolve,
            reject,
            html,
            error
        }
    }

    static async cdekShopping(url = '', params = {}) {
        const {resolve, html} = await this.createShop(url, params)
        const {includes: inStock} = Parser.target({
            html,
            target: "form.add-to-cart-form button[type='submit']",
            values: ['В корзину'],
        })
        const price = getNumber(Parser.target({
            html,
            target: ".ps-product__price > span"
        }).text)
        return resolve({inStock, price})
    }

    static async videoigrNet(url = '', params = {}) {
        const {resolve, html} = await this.createShop(url, params)

        const {includes: inStock} = Parser.target({
            html,
            target: "form[name='cart_quantity'] .bey_button",
            values: ['Купить']
        })

        const {text: price} = Parser.target({
            html,
            target: 'label.cls_div_for_out_price'
        })

        return resolve({
            inStock,
            price: getNumber(price)
        })
    }

    static async cInteres(url = '', params = {}) {
        const {resolve, html} = await this.createShop(url, params)

        const {includes: inStock, item} = Parser.target({
            html,
            target: 'a[data-completed-text].product_buy_button',
            attr: 'href',
            values: ['/basket/'],
        })
        const price = item?.attr('data-price')
        return resolve({
            inStock,
            price: getNumber(price)
        })
    }
}
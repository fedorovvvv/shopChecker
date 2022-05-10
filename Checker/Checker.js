import axios from "axios";
import {Parser} from "../Parser/Parser.js";

export class Checker {
    static getTemplate(newFields = {}) {
        return {
            ...{
                inStock: false,
                price: 'Not Found',
            }, ...newFields
        }
    }
    static async getHtml(url = '') {
        try {
            const {data:html, status} = await axios.get(url)
            return {
                html,
                status
            }
        } catch(e) {
            const {status} = e.response
            return {
                error: this.getTemplate(),
                status,
            }
        }
    }

    static async videoigrNet(url = '') {
        console.log(this)
        const {html, error} = await this.getHtml(url)
        if (error) {
            return error
        }
        const {includes: inStock} = Parser.target({
            html,
            target: "form[name='cart_quantity'] .bey_button",
            values: ['Купить']
        })
        const {text: price} = Parser.target({
            html,
            target: 'label.cls_div_for_out_price'
        })
        return this.getTemplate({
            inStock,
            price,
        })
    }

    static async cInteres(url = '') {
        // const html = await cloudflareScraper.get('https://www.1c-interes.ru/catalog/konsoli/komplekt_sony_playstation_5_igra_demon_s_souls_igra_chelovek_pauk_maylz_morales/')
        const {html, error} = await this.getHtml(url)
        if (error) {
            return error
        }
        const {includes: inStock, item} = Parser.target({
            html,
            target: 'a[data-completed-text].product_buy_button',
            attr: 'href',
            values: ['/basket/'],
        })

        const price = item.attr('data-price')
        return this.getTemplate({
            inStock,
            price,
        })
    }
}
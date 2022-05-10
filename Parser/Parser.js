import cheerio from 'cheerio'

export class Parser {
    static target({
        html = '',
        target = '',
        attr= '',
        values = [],
    }) {
        if(html) {
            const $ = cheerio.load(html)
            const items = $(target)
            let includes = false
            const item = $(items[0])
            const text = item.text()
            const attrValue = attr ? item.attr(attr) : ''

            if (values.includes(item.text())) includes = true
            if (attr && values.includes(item.attr(attr))) includes = true

            return {
                includes,
                text,
                attrValue,
                items,
                item
            }
        } else {
            return {
                error: true
            }
        }
    }
}
export class NAMES {
    static suffixes = {
        'DE': 'Digital Edition',
        'Pro': 'Pro',
        'Slim': 'Slim',
        'Black': 'Black',
    }
    static dictionary = {
        'ps5': 'Playstation 5',
        'ps4': 'Playstation 4',
        'DS': 'PlayStation DualSense'
    }

    static getValue(key = '', obj = {}) {
        for (let val in obj) {
            if (val.toLowerCase() === key.toLowerCase()) {
                return obj[val]
            }
        }
        return undefined
    }
    static getSuffix(value = '') {
        return this.getValue(value, this.suffixes)
    }
    static get(value = '') {
        const [name, ...suffixes] = value.split('_')
        return `${this.getValue(name, this.dictionary)} ${suffixes.map(s => this.getSuffix(s)).join(' ')}`
    }
}
export function getNumber(str = '') {
    return str.replace(/[^0-9]/g,"")
}

export function flat(str = '') {
    return str.toLowerCase().replace(/\s/g,'')
}

export function find(str = '', findStr = '') {
    return flat(str).includes(flat(findStr))
}
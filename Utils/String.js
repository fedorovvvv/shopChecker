export function getNumber(str = '') {
    return str.replace(/[^0-9]/g,"")
}
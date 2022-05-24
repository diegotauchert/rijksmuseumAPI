export function normalizeUrl(url:string) {
    return url.replaceAll('-', '').replace(/[^\w\s]/gi, '').replaceAll(/\s/g, '-').replaceAll(',', '-').replaceAll('.', '').replaceAll(/[’"]+/g, '').toLowerCase();
}

export function isHexadecimal(str:string) {
    return /^[0-9a-fA-F]+$/.test(str);
}

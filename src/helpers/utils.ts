export function normalizeUrl(url:string) {
    return url.replaceAll(/\s/g, '-').replaceAll(',', '-').replaceAll('.', '').replaceAll(/[’"]+/g, '').toLowerCase();
}

export function encodePipe(url:string) {
    return url.replaceAll('/', '|');
}

export function decodePipe(url:string) {
    return url.replaceAll('|', '/');
}

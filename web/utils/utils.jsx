export function getBg(url, prefix) {
    if (!url) return '';
    if (url.indexOf('http://') === 0) return {backgroundImage: url};
    if (url.indexOf('https://') === 0) return {backgroundImage: url};
    prefix = prefix || 'http://';
    return {backgroundImage: prefix + url};
}






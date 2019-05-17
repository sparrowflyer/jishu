export function getBg(url, prefix) {
    if (!url) return '';
    if (url.indexOf('http://') === 0) return {backgroundImage: url};
    if (url.indexOf('https://') === 0) return {backgroundImage: url};
    prefix = prefix || 'http://';
    return {backgroundImage: prefix + url};
}

function isString(unknown) {
    return Object.prototype.toString.call(unknown) === '[object String]';
}

export function getIterativeValue(variable, next, replace) {
    if (!variable) return variable;
    if (!isString(next)) return variable;
    replace = isString(replace) ? replace : '';
    let arr = next.split('.');
    arr.every((item) => {
        variable = variable[item];
        return variable;
    });
    return variable || replace;
}




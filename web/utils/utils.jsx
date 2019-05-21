function isString(unknown) {
    return Object.prototype.toString.call(unknown) === '[object String]';
}

export function isArray(unknown) {
    return Object.prototype.toString.call(unknown) === '[object Array]';
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




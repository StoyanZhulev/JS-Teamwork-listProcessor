function prepend(str, arr) {
    let textToPrepend = str.split(' ').slice(1).join(' ');
    arr.unshift(textToPrepend);

    return arr.join(' ');
}

module.exports = prepend;
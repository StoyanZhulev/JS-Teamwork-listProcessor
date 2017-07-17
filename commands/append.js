function append(str, arr) {
    let textToAppend = str.split(' ').slice(1).join(' ');
    arr.push(textToAppend);

    return arr.join(' ');
}

module.exports = append;
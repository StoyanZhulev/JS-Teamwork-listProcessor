function roll(str, arr){
    function rollLeft() {
        let el = arr.shift();
        arr.push(el);
    }
    function rollRight() {
        let el = arr.pop();
        arr.unshift(el);
    }

    let strArgs = str.split(' ');
    switch (strArgs[1]){
        case 'left':
            rollLeft();
            break;
        case 'right':
            rollRight();
            break;
        default:
            throw new Error('Error: invalid command');
    }

    return arr.join(' ');
}

module.exports = roll;
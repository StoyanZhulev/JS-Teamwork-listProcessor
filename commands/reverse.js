function reverse(array,tokens) {
    if (tokens.length > 0) {
        return 'Error: invalid command parameters';
    }
    array.reverse();
    return true
};

module.exports = reverse;
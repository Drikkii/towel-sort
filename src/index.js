// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            [...matrix, ...matrix[i]];
        } else if (matrix.length === 0) {
            return [];
        } else {
            [...matrix, ...matrix[i].reverse()];
        }
    }

    let result = [].concat(...matrix);

    console.log(result);
    return result;
};

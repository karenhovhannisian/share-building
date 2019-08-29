let arr = [ 1.5, 3, 6, 1.5 ];

function convert(array) {
    let sum = array.reduce((sum, item) => sum + item, 0);

    return array.map((item) => ((item * 100) / sum).toFixed(3));
}

console.log(convert(arr));
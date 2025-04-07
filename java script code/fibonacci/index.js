function fibonacciGenerator(n) {
    let output = [];
    if (n === 0) {
        output = [0];
    }
    else if (n === 1) {
        output = [0, 1];
    }
    else {
        output = [0, 1];
        for (let i = 2; i < n; i++) {
        output.push(output[output.length - 2] + output[output.length - 1]);

        }
    }
    return output;
}

output = fibonacciGenerator(4);
console.log(output);
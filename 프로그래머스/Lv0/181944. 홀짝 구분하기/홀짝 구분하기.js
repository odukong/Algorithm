const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close', function () {
    (Number(input[0])%2===0)? console.log(Number(input[0]),"is even"):console.log(Number(input[0]),"is odd");
});
const numbers = [2, 3, 4, 6];
const output = [];
doubleIt = number => number * 2;

for (const number of numbers) {
    // const result = number * 2;
    const result = doubleIt(number);

    output.push(result);
}
console.log(output);




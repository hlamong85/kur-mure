const add = (num1, num2) => num1 + num2;
console.log(add(5, 10));
const add1 = num1 => num1 * 10;
console.log(add1(10));
const add3 = () => 'bandarban';
console.log(add3());
const add4 = (x, y) => {
    const sum = x + y;
    const sub = x - y;
    const result = sum * sub;
    return result;
}

console.log(add4(20, 10));
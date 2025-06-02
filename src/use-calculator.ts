import { Calculator } from "./calculator";

let calc = new Calculator();

console.log("TOTAL: " + calc.total);

calc.add(5);

console.log(`TOTAL: ${calc.total}`);

try {
    calc.divide(0);
}
catch(err) {
    console.log("ERROR afgevangen: " + err.message);
}

console.log(`TOTAL AFTER: ${calc.total}`);
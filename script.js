let income = 60000;
let taxRate = .00;

function calcTax(income, taxRate) {
if (income > 0 && income <= 10275) {
    taxRate = .10;
} else if (income >= 10276 && income <= 41775) {
    taxRate = .12;
} else if (income >= 41776 && income <= 89075) {
    taxRate = .22;
} else if (income >= 89076 && income <= 170050) {
    taxRate = .24;
} else if (income >= 170071 && income <= 215950) {
    taxRate = .32;
} else if (income >= 215951 && income <= 539900) {
    taxRate = .35;
} else if (income >= 539901) {
    taxRate = .37;
} 
console.log(`Your income is ${income}, your tax rate is ${taxRate}. This year, you'll pay $${income * taxRate} in taxes.`);
}

calcTax(income);
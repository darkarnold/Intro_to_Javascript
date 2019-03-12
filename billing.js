// This is the percentage that determines the transaction charge
const transactionCharge = 0.025;

let amountTendered = 100000;

console.log("This is what the billed amount is (less transaction charges);");

//Print out the result
console.log(amountTendered - transactionCharge*amountTendered);

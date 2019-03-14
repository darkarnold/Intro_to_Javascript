
//Function to calculate billing
// This is the percentage that determines the transaction charge
// transanctionCharge is a percentage
 const billing = (amountTendered ,transactionCharge) =>{

  //const transactionCharge = 0.025;

  //let amountTendered = 100000;

  console.log("This is what the billed amount is (less transaction charges);");

  //Print out the result
    return amountTendered - transactionCharge*amountTendered;


}

 console.log(billing(100000,0.025));

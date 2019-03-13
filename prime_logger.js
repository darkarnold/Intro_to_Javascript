// takes in a value of n and returns prime numbers within the range of n

let z = 20;

nextPrime:
for(let x = 2; x <= z; x++){

  for( let y =2; y < x; y++){
    if (x % y === 0) continue; nextPrime;


  }
  console.log(x);
}

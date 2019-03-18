// Function takes in a value
// takes in a value of n and returns prime numbers within the range of n

//var n=100;
// import shuffle function from shuffler.js
const shuffle = require('./shuffler.js');

// array to store prime numbers
var prime = [];

const number = (n) =>
{
  //loop through the given range and check if its greater than the first prime number
  for (var num = 2; num <= n; num++) {

    var notPrime = false;

    for (var i = 2; i <= num; i++) {
      // check for the divisor and if the divisor is not equal the number
        if (num%i===0 && i!==num) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
    //add the prime number to the prime array;
    prime.push(num);

}

}

//Assign the function shuffle to a variable that stores the shuffled numbers and return it
var shuffled = shuffle(prime);

return shuffled;




  }

// variable to store the function number in order to use it outside of its scope
var ranges = number(100);
// print the shuffled array of prime numbers
console.log("This is the shuffled prime numbers");
  console.log(ranges);
// function to organise the shuffled prime number array
  var arrayToAscending = (inputArray)=>{
 var organisedArray = []
 var arrayShuffled = inputArray
 // check if the maximum value in the  shuffled array is greater than the values stored in orgaised array.
 for (var j=0; Math.max(...arrayShuffled) > Math.max(...organisedArray); j++){
   var current_lowest = Math.min(...inputArray);
   var lowest_index = arrayShuffled.indexOf(current_lowest);
   organisedArray.push(current_lowest);
   arrayShuffled.splice(lowest_index,1);
  }
   return (organisedArray)
}
// Call the shuffled prime numbers in the arrayToAscending function and assign it to the organisedPrime variable
var organisedPrime = arrayToAscending(ranges);

console.log("Prime Array in ascending order");
// Print the array in ascending order
console.log(organisedPrime);

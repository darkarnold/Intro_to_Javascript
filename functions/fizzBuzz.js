/*Function that accepts a number and returns multiples of 3, 5 and 15 and returns fizz , buzz and fizzbuzz respectively
between 1 and the range of the number entered
*/
/* checks if number is multiple of three prints "Fizz", multiples of 5 prints "Buzz"
and multiples of both 3 and 5 prints FizzBuzz */

const fizzbuzzer = number => {

  for(let num =1; num<=number; num++){
    if (num % 15 === 0){
      console.log("FizzBuzz");
    }
    else if (num % 3 === 0){
       console.log("Fizz");
     }
    else if (num % 5 === 0 )
    {
      console.log("Buzz");
    }
    else{

    console.log(num);

  }


}
return ("end code")
}
console.log(fizzbuzzer(12))

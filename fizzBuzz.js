/* checks if number is multiple of three prints "Fizz", multiples of 5 prints "Buzz"
and multiples of both 3 and 5 prints FizzBuzz */

for(let number = 1; number<=100; number++){
  if (number % 15 == 0) console.log("FizzBuzz");
  else if (number % 3 == 0) console.log("Fizz");
  else if (number % 5 ==0 )console.log("Buzz");
  else console.log(number);

}

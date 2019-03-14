//Allow variable to be entered using prompt
//check if number is greater than 0
// Function that checks that a number is greater than zero and returns a value

const checker = num => {
  if(num > 0){
    return 1;
  }
  //number less than 0
  else if (num < 0) {

     return -1;

  }
  else{
    return 0;
  }

}
console.log(checker(17));

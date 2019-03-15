// Function that loops through to 2 to a given number x
// loops through numbers between 2 -given muber x and outputs even numbers
 const even_sort = (x) => {

  for(var even = 2; even <= x; even++){
    if(even%2 ===0){
      console.log (even);


}
else {
  console.log("not even");
}

  }
}
console.log(even_sort(60));

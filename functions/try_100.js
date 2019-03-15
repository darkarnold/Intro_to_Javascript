// Enter a number greater than 100
// check if it greater than 100
//output greater if it is greater than 100
// output try again if it is less than
const try_100 = num =>{

  //var num = 789;
  for (var nums =0; nums >num; nums++); {
   if(num<=100){
       return "input again";
   }
   else{
     return num;

   }
  };

}

console.log(try_100(789));

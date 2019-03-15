//Function to calaculate age given day month and year
// calculate age using current year and and year of birth assigned to variable date
const calculateAge = date =>{
  //var date = "23 07 1995";
  var currentYear = 2019;
   return currentYear - date.split(" ") [2];

}
 console.log(calculateAge("31 07 1900") + " years");

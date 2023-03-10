/* Q7

*/


var input1 = prompt("Enter first integer:");
var input2 = prompt("Enter second integer:");

//validate
if (Number.isInteger(Number(input1)) && Number.isInteger(Number(input2))) {
  // Convert inputs to numbers and calculate sum
  var sum = parseInt(input1) + parseInt(input2);

  //Print Sum
  var content = document.getElementById("content");
  content.innerHTML = input1 + " + " + input2 + " = <span style='color:red;font-weight:bold;'>" + sum + "</span>";
} else {
  //Print Error
  var content = document.getElementById("content");
  content.innerHTML = "<span style='color:red;font-weight:bold;'>Error!</span> You must enter integers. You entered \"" + input1 + "\" and \"" + input2 + "\". Try again.";
}

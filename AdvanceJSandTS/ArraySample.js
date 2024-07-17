let numbers=[1,2,1,2,3,2,3,1];
if(numbers[0]==numbers[1])
{
console.log("Correct!");
document.getElementById("demo").innerHTML =
    "Correct!";
}
else {
console.log("Wrong, please try again");
document.getElementById("demo").innerHTML =
    "Wrong, please try again";
}
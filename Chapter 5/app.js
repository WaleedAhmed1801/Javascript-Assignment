var num1 = Number(prompt("Enter Num 1"));
var operator = prompt('Enter Operator')
var num2 = Number(prompt("Enter Num 2"));

if(operator == "+"){
    var sum = num1+num2
    alert("Sum of "+num1 +" and " + num2 + " is " + sum)
}
else if(operator == "-"){
    var sum = num1-num2
    alert("Subtraction of "+num1 +" and " + num2 + " is " + sum)
}
else if(operator == "*"){
    var sum = num1*num2
    alert("Multiplication of "+num1 +" and " + num2 + " is " + sum)
}
else if(operator == "/"){
    var sum = num1/num2
    alert("Division of "+num1 +" and " + num2 + " is " + sum)
}
else if(operator == "%"){
    var sum = num1%num2
    alert("Modulus of "+num1 +" and " + num2 + " is " + sum)
}
// ------------------------- this task completed here ---------------------------

// var num1 = +prompt(" Enter Value 1 Increment")
// var num2 = +prompt(" Enter Value 2 ")
// var result = ++num1 + num2--

// document.write(result) 


var num;
document.write("Value after variable declaration is: " + num + "<br>");

num = 5;
document.write("Initial value: " + num + "<br>");

num++;
document.write("Value after increment is: " + num + "<br>");

num += 7;
document.write("Value after addition is: " + num + "<br>");

num--;
document.write("Value after decrement is: " + num + "<br>");

var remainder = num % 3;
document.write("The remainder is: " + remainder + "<br>");

var num1=13;
var num2=34;
console.log(`Before swapping num1 value is : ${num1}`);
console.log(`Before swapping num2 value is : ${num2}`);

num1=num1+num2; //13=13+34=47
num2=num1-num2; //34=47-34=13
num1=num1-num2; //47=47-13=34
console.log(`After swapping num1 value is : ${num1}`);
console.log(`After swapping num2 value is : ${num2}`);


// with using variable
var a=6;
var b=10;
var temp;
console.log(`Before swap a is : ${a}`);
console.log(`Before swap b is : ${b}`);
temp=a;
a=b;
b=temp;
console.log(`After swap a is : ${a}`);
console.log(`After swap b is : ${b}`);
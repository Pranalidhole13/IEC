var per=123;

if(per>=0 && per<=34.99){
    console.log("Fail");
}
else if(per>=35 && per<=44.99){
    console.log("Pass");
}
else if(per>=45 && per<=59.99){
    console.log("Second Class");
}
else if(per>=60 && per<=74.99){
    console.log("First Class");
}
else if(per>=75 && per<=100){
    console.log("Distinction");
}
else{
    console.log("Invalid");
}

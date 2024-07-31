var is_prime=true;
var num=7;
if(num ==1){
    console.log("1 is neither prime nor composite");
}
else if(num>1){
    for(var i=2;i<num;i++){
        is_prime=false;
        break;
    }
    if(is_prime){
        console.log(`${num} is a Prime number`)
    }
    else{
        console.log(`${num} is not a Prime number`)
    }
}


        var name="SBI";
        var type="saving";
        var accNo=123456;
        // if(name==='SBI'&& type==='saving' && accNO===123456){
        //     document.write("deposit rs");
        // }
        // else{
        //    document.write("Bank not found");
        // }
        var balance=25000;
        if(name ==="SBI"){
            if(type==="saving"){
                if(accNo===123456){
                    console.log("Account balance is "+balance);
                    balance+=25000;
                    console.log("Account balance is "+balance);
                }
                else{
                    console.log("Account  no is not same")
                }
            }
            else{
                console.log("Account type is not saving");
            }
        }
        else{
            console.log("Bank is not found");
        }

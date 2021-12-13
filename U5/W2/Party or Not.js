function runProgram(input) {
    input=input.trim().split("\n")
    let key= input[0].trim().split(" ").map(Number)
    
    let arr= input[1].trim().split(" ").map(Number).sort((a,b)=>{return a-b})
    // console.log('arr:', arr)
    let rs=0
    let result=0
        for (let i = 0; i < arr.length; i++) {
            if((rs+=arr[i])<=key[2]){
            result++
           }
        }
        
    if(result>=key[1]){
        console.log("Party");
    }else{
        console.log("Sad");
    } 
    }


    if (process.env.USERNAME === 'Rohan') {
        runProgram(`5 3 24
    6 4 21 20 13`);
        } else {
        process.stdin.resume();
        process.stdin.setEncoding("ascii");
        let read = "";
        process.stdin.on("data", function (input) {
          read += input;
        });
        process.stdin.on("end", function () {
          read = read.replace(/\n$/, "");
          read = read.replace(/\n$/, "");
          runProgram(read);
        });
        process.on("SIGINT", function () {
          read = read.replace(/\n$/, "");
          runProgram(read);
          process.exit(0);
        });
        }
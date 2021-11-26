function runProgram(input) {
    input=input.trim().split("\n")
    let key= input[0].trim().split(" ").map(Number)
    
    let arr= input[1].trim().split(" ").map(Number).sort((a,b)=>{return a-b})
    let rs=0
    let result=0
        for (let i = 0; i < arr.length; i++) {
            if((rs+=arr[i])<=key[1]){
            result++
           }
        }
    console.log(result);
    }


    if (process.env.USERNAME === 'Rohan') {
        runProgram(`4 10
        5 4 2 4`);
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
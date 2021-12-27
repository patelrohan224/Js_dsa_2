

function runProgram(input) {
    input=input.trim().split("\n")
for (let i = 1; i < input.length; i++) {
    let n=Number(input[i])
    fun(n)
}
}

function fun(n) {
    // console.log();
    if(n%2==0){
        if((n/2)%2==0)
        {
            console.log("Even Skewed");
        }
        else{
            console.log("Not Skewed");
        }
    }else{
        if((n/2)%2!=0)
        {
            // console.log("Even Skewed");
            console.log("Odd Skewed");
        }
        else{
            console.log("Not Skewed");
        }
    }
}

if (process.env.USERNAME === 'Rohan') {
    runProgram(`3
    4
    6
    11`);
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
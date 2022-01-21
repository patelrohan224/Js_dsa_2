function runProgram(input) {
    input=input.trim().split("\n")
    for (let i = 1; i < input.length; i++) {
        let arr=input[i].trim().split(" ").map(Number)
        fun(arr[0])
    }
}
function fun(a) {
    if(a%2==0){
        console.log(a/2);
    }else if(a%2!==0){
        console.log((a-1)/2);
    }
    
}

if (process.env.USERNAME === 'Rohan') {
    runProgram(`3
    2
    11
    12`);
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


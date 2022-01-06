function runProgram(input) {
    input=input.trim().split("\n")
        let array=input[1].trim().split(" ").map(Number)
        for (let i = 3; i < input.length; i++) {
            let LR=input[i].trim().split(" ").map(Number)
            
            fun(array,LR)
        }
}
function fun(array,LR) {
    let sum=0
    for (let i = LR[0]; i <=LR[1]; i++) {
        sum+=array[i-1]
    }
    console.log(sum);
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`4
    3 2 1 5
    4
    1 3
    2 4
    1 4
    3 3`);
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


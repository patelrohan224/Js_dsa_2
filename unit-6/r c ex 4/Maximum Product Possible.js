function runProgram(input) {
    input=input.trim().split("\n")
    for (let i = 2; i < input.length; i=i+2) {
        let arr=input[i].trim().split(" ").map(Number).sort((a,b) =>{return b-a})
        fun(arr)
    }
}
function fun(array) {
    console.log(array[0]*array[1]);
}

if (process.env.USERNAME === 'Rohan') {
    runProgram(`3
    6 
    1 0 7 2 4 0
    5
    1 2 3 4 5
    2
    0 0`);
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


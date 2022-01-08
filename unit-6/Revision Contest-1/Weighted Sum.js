function runProgram(input) {
    input=input.trim().split("\n")

    for (let i = 2; i < input.length; i=i+2) {
       var str=input[i].trim().split(" ").map(Number)
       fun(str)

    }
}
function fun(array) {
    let sum=0
    for (let i = 0; i < array.length; i++) {
        sum+=array[i]*(i+1)
        }
        console.log(sum);
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`2
    5
    1 2 3 4 5
    2
    100 1
    `);
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


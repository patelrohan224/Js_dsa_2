function runProgram(input) {
    input=input.trim().split("\n")

    for (let i = 1; i < input.length; i++) {
       var str=input[i].trim().split(" ").map(Number)
       fun(str)
    }
}
function fun(array) {
    let a=array[0]
    let b=array[1]
    let c=array[2]
    if(a<(b+c) && b<(a+c) && c<(b+a)){
       return console.log("Yes");
    }
   return console.log("No");
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`4
    4 5 13
    7 1 8
    2 5 4
    2 2 2
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


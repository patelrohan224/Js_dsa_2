function runProgram(input) {
    input=input.trim().split("\n")

    for (let i = 2; i < input.length; i=i+2) {
       var str=input[i].trim().split(" ").map(Number)
       fun(str)

    }
}
function fun(array) {
    let c=0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[i]==2*array[j]){
                c++
            }

        }
    }
    console.log(c);
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`2
    5
    1 1 1 1 1
    6
    1 1 2 2 4 1 
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


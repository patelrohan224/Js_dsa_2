function runProgram(input) {
    input=input.trim().split("\n")
    for (let i = 1; i <input.length; i=i+2) {
        let sum=input[i].trim().split(" ").map(Number)
        let array=input[i+1].trim().split(" ").map(Number)
        fun(array)
        console.log("-");
    }
}
function fun(array) {
  for (let i = 0; i < array.length; i++) {
      for (let j = i; j < array.length; j++) {
            
        }
      }
      
    }
}

if (process.env.USERNAME === 'Rohan') {
    runProgram(`3
8
1 2 1 3 2 7 4 2
5
1 2 1 3 4
4
1 2 2 1`);
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


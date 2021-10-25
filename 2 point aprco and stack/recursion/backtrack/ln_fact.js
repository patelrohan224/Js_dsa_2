function runProgram(input) {
    input =input.trim().split(" ").map(Number)
   

  console.log(Math.log(fun(input)).toFixed(4))
}

function fun(n) {
   if(n==1) 
   {
       return 1
   }
   return n*fun(n-1)
}
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`3`);
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
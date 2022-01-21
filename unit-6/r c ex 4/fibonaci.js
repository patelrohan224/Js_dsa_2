function runProgram(input) {
input=Number(input);
// fib(input)
console.log(fib(input))
}
function fib(n)
{
  if(n==0) return 0
  else if(n==1) return 1
  else{
    return fib(n-1)+fib(n-2)
  }
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`4`);
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
function runProgram(input) {
    input=Number(input);    
    console.log( fun(input))
}

function fun(n){
 if(n==0 || n==1){
     return n
 }else{
     return fun(n-1)+fun(n-2)
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


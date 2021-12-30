function runProgram(input) {
    input=Number(input);    
    console.log( fun(input))
}

function fun(n){
 if(n==1){
     return n
 }else{
     return n*fun(n-1)
 }
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`5`);
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


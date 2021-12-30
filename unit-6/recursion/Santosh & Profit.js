function runProgram(input) {
    input=input.trim().split('\n')   
    for (let i = 1; i < input.length; i++) {
        let a=input[i].trim().split(" ").map(Number)
        console.log(fun(a[0]))
    }
}

function fun(n){
    if(n===0 ){
        return 1;
    }
    if(n<0){
        return 0
    }
        
    return (fun(n - 4) + fun(n - 8));
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`1
    12`);
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


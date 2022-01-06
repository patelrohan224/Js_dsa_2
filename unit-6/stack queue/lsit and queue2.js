function runProgram(input) {
    input=input.trim().split("\n")
    let ar=[]
    for (let i = 1; i < input.length; i++) {
    let arr=input[i].trim().split(" ")
    if(arr.length>1){
      ar.push(arr[1])
    }else{
      if(ar.length!==0){
        console.log(ar.pop());
      }else{
        console.log("Empty");
      }
    }
    
    }
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`43
    Push 4
    Push 5
    Pop`);
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


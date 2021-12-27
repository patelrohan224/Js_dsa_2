function runProgram(input) {
input=input.trim().split("\n")
let len=input[1].trim().split(" ").map(Number)
let odd=0
let even=0
for (let i = 0; i <=len.length; i++) {
        if(len[i]%2==0){
            even+=len[i]
        }
       else{
            odd+=len[i]
        }
}

if(odd>even){
    console.log("Odd");
}else {
    console.log("Even");
}
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`4
    3 5 1 4`);
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
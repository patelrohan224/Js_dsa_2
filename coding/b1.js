
function runProgram(input) {
input=input.trim().split("\n")
let str=input[1].trim().split("")
console.log( fun(str))
}

function fun(str) {
    if(str[0]=="a" || str[0]=="u" || str[0]=="i" || str[0]=="e" || str[0]=="o"){
        str.push("h")
        str.push("u")
        str.push("l")
        str.push("k")
    }
    else{
        str.push("t")
        str.push("h")
        str.push("o")
        str.push("r")
    }
    return str.join("")
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`5
    abced`);
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
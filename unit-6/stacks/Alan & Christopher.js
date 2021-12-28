function runProgram(input) {
    input=input.trim().split("\n")
    for (let i = 1; i < input.length; i++) {
    let arr=input[i].trim().split("")
    fun(arr)
    }
}
function fun(str){
    let ar=[]
    for (let i = 0; i < str.length; i++) {
        if(str[i]=="#"){
            ar.pop()
        }
        else{ar.push(str[i])}
    }
    console.log(ar.join(""));
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`2
    ab#d
    a#bc`);
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


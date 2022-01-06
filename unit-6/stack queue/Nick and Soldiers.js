function runProgram(input) {
    input=input.trim().split("\n")
    let key=input[0].trim().split(" ").map(Number)
    let arr=input[1].trim().split(" ").map(Number)
    fun(arr,key[1])
}
let finalResult=[]
function fun(array,key) {
    let rs=[]
    for (let i = 0; i < array.length; i++) {
        if(array[i]!==key){
            rs.push(array[i])
        }
    }
    let min=rs[0]
    for (let i = 0; i < rs.length; i++) {
        if(min<rs[i]) {
            min=rs[i]
        }
    }
    console.log(min);
}

if (process.env.USERNAME === 'Rohan') {
    runProgram(`6 5
    1 2 2 3 4 5`);
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


function runProgram(input) {
    input=input.trim().split("\n")
    for (let i = 1; i < input.length; i=i+2) {
        let ar=input[i].trim().split(" ").map(Number)
        console.log(fun(ar));
    }
}
function fun(array) {
    let ar=[]
    for (let i = 0; i < array.length-1; i++) {
        if(array[i]<array[i+1]){

        }else{
            ar.push(array[i])
        }
    }
    console.log(ar);
    for (let i = 0; i < ar.length-1; i++) {
        if(ar[i]>ar[i+1]){

        }else{
            return "no"
        }
    }
    return "yes"
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`4
    2 3 6 1 4 5 7
    0`);
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


function runProgram(input) {
    input=input.trim().split("\n")
    let key= input[0].trim().split(" ").map(Number)
    
    let arr= input[1].trim().split(" ").map(Number)
    console.log(fun(arr))
}
function fun(arr){
let minicost=0
    let currentbus=0
    for (let i = 0; i < arr.length; i++) {
        if(arr[currentbus]>arr[i]){
            minicost+=Math.abs(i-currentbus)*arr[currentbus]
            currentbus=i
        }
    }
    minicost+=Math.abs(arr.length-currentbus)*arr[currentbus]
    return minicost
}

    if (process.env.USERNAME === 'Rohan') {
        runProgram(`5
        4 7 8 3 4`);
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
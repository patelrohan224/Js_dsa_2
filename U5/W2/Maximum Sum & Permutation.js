function runProgram(input) {
    input=input.trim().split("\n")
    let key= input[0].trim().split(" ").map(Number)
    
    let arr= input[1].trim().split(" ").map(Number).sort((a,b)=>{return a-b})
    let rs=0
    for (let i = 0; i < arr.length; i++) {
        rs+=arr[i]*i
    }
    console.log(rs);
}

    if (process.env.USERNAME === 'Rohan') {
        runProgram(`4
        2 5 1 6`);
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
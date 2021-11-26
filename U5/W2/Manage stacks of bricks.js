function runProgram(input) {
    input=input.trim().split("\n")
    let len= input[1].trim().split(" ").map(Number)
   let rs=0 
for (let i = 1; i < input.length; i=i+len[0]+2) {
    for (let j = i+3; j <i+len[0]+3; j++) {
    let arr=input[j].trim().split(" ").map(Number)
    console.log('arr:', arr)
   for (let k = 0; k < arr.length; k++) {
       rs+=arr[k]
   }
}
}
console.log(rs);
}


    if (process.env.USERNAME === 'Rohan') {
        runProgram(`50
        5
        13
        17
        1740 9488
        2455 1711
        5276 1423
        2216 8576
        1892 7954
        5
        13
        17
        3123 3411
        3874 2779
        3198 6502
        8602 4865
        9006 1389`);
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
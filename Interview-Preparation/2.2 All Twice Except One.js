
function runProgram(input) {
    var arr=input.split("\n")
    for (let i =1; i < arr.length; i=i+2) {
        let array=arr[i+1].trim().split(" ").map(Number)
      fun(array)
    }
}
function fun(array) {
    let temp=array[0]
    for (let i =1; i < array.length; i++) {
        temp^=array[i]
    }
    console.log(temp);
}

     if (process.env.USERNAME ==='Rohan') {
       runProgram(`2
       1
       5
       5
       1 2 1 3 2`);
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


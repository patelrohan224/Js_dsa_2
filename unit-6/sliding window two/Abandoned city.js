function runProgram(input) {
    input=input.trim().split("\n")
    for (let i = 1; i <input.length; i=i+2) {
        let sum=input[i].trim().split(" ").map(Number)
        let array=input[i+1].trim().split(" ").map(Number)
        fun(sum[1],array)
        console.log("-");
    }
}
function fun(target,array) {
  for (let i = 0; i < array.length; i++) {
      for (let j = i; j < array.length; j++) {
        let sum=0
        for (let k = i; k <=j; k++) {
          sum+=array[k]         
        }
        console.log(sum);
        if(sum===target){
          console.log("Yes");
          return 
        }
      }
      
    }
}

if (process.env.USERNAME === 'Rohan') {
    runProgram(`2
    5 13
    5 1 2 3 4 
    1 10
    1`);
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


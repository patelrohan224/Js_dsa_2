function runProgram(input) {
    input=input.trim().split('\n')
    for (let i = 1; i < input.length; i++) {
        let array=input[i].trim().split(" ")
        console.log(fun(array))
    }
  }
  function fun(array){
      let len=Math.min(array[0].length,array[1].length,array[2].length)
      let string=""
    for(let i = 0; i <len; i++) {
        if(array[0][i]==array[1][i] && array[1][i]==array[2][i]){
            string+=array[1][i]
        }else{
            break
        }
    }
    return string.length!=0 ? string : "None" 
  }
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`1
        rbbyrrby rbb rbbybbryb`);
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
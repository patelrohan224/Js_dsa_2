function runProgram(input) {
    input=input.trim().split("\n")
    let arr= input[1].trim().split(" ").map(Number)
    console.log(fun(arr));
    }
    function fun(array) {
        let rs=-1
        for (let i = 0; i < array.length; i++) {
            if(array[i]==1)
            {
                rs=i
                break
            }
            
        }
        return rs
    }
    
    
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`5
        0 0 0 1 1`);
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
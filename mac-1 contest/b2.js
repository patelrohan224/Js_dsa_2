function runProgram(input) {
    input=input.trim().split("\n")
    // console.log('input:', input)
    for (let i = 2; i < input.length; i=i+2) {
        let len=input[i].trim().split(" ").map(Number)     
        fun(len)
    }

    }
    function fun(len) {
        let count=0
        for (let i = 0; i < len.length; i++) {
            for (let j = 0; j <len.length; j++) {
                if(len[i]==2*len[j]){
                    count++;
                } 
            }
        }
        console.log(count);
    }
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`2
        5
        1 1 1 1 1
        6
        1 1 2 2 4 1`);
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
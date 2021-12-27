function runProgram(input) {
    input=input.trim().split("\n")
    // console.log('input:', input)
    for (let i = 1; i < input.length; i++) {
        let len=Number(input[i])
        // fun(len)        
        console.log( fun(len)   )
    }
    }

    function fun(n) {
        let rs=1
        let pointer=1
        if(n==0 || n==1){
            return n
        }
        while(rs<=n){
            pointer++;
            rs=pointer*pointer
        }
        return pointer-1
    }
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`2
        4
        8`);
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
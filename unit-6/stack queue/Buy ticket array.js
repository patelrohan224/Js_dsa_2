    function runProgram(input) {
        input=input.trim().split("\n")
        let ar=[]
        for (let i = 1; i < input.length; i++) {
        let arr=input[i].trim().split(" ")
        if(arr.length>1){
            ar.push(arr[1])
            console.log(ar.length);
        }else{
            if(ar.length!=0){
                let x=ar.shift()
                console.log(x,ar.length);
            }else{
                console.log(-1,ar.length);
            }
        
        }
        
        }
    }
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`5
        E 2
        D
        D
        E 3
        D`);
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


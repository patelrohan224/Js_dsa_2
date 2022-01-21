function runProgram(input) {
    input = input.trim().split("\n")
    for (let i = 1; i < input.length; i++) {
        let arr = input[i].trim().split(" ").map(Number)
        console.log(fun(1,arr[0])? "Yes":"No")
    }
}

    function fun(a,n) {
        if(a>n){
            return false
        }else if(a==n){
            return true
        }
        else{
            return fun(a*10,n) || fun(a*20,n)
        }
    }

if (process.env.USERNAME === 'Rohan') {
    runProgram(`5
    1
    2
    10
    25
    200`);
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
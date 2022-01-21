function runProgram(input) {
    input = input.trim().split("\n")
    for (let i = 2; i < input.length; i = i + 2) {
        let arr = input[i].trim().split(" ").map(Number)
        fun(arr)
    }
}

function fun(array) {
    let c=0
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if((array[i]+array[j])%60==0){
                c++
            }
        }
    }
    console.log(c);
}

if (process.env.USERNAME === 'Rohan') {
    runProgram(`2
    3
    60 60 60
    5
    30 30 10 20 400`);
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
function runProgram(input) {
    input = input.trim().split("\n")
    for (let i = 2; i < input.length; i = i + 2) {
        let arr = input[i].trim().split(" ").map(Number)
        fun(arr)
    }
}

    function fun(array) {
        let temp=array[0]
        for (let i = 1; i < array.length; i++) {
            temp=temp^array[i]
        }
        console.log( temp)
    }

if (process.env.USERNAME === 'Rohan') {
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
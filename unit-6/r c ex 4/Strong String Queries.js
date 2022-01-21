function runProgram(input) {
    input = input.trim().split("\n")
    let strings = input[1].trim().split(" ")
    let ar = new Array(strings.length).fill(0)
    let vowel = ["a", "e", "o", "u", "i"]
    for (let i = 0; i < strings.length; i++) {
        if (
            vowel.indexOf(strings[i][0]) !== -1 &&
            vowel.indexOf(strings[i][strings[i].length - 1]) !== -1
        ) {
            ar[i]=1
        }
    }
    for (let i = 3; i < input.length; i++) {
        let [l,h] = input[i].trim().split(" ").map(Number)
        fun(ar,l,h)
    }
}

function fun(array,l,h) {
    let c=0
    for (let i = l-1; i <h; i++) {
           if(array[i]==1){
                c++
           }
    }
    console.log(c);
}

if (process.env.USERNAME === 'Rohan') {
    runProgram(`5
    aba suna oua tes aba
    5
    1 5
    2 4
    1 3
    3 5
    5 5`);
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
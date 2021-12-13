function runProgram(input) {
    input=input.trim().split("\n")
    for (let i = 0; i < input.length; i++) {
      

        let coin=input[i].trim().split(" ").map(Number)
        let set = new Map();
      
        // console.log(dp);
        console.log(fun(coin[0],set))
    }
}
function fun(coin,set) {
    // console.log('coin:', coin)
    if (coin<=2) {
        return coin
    }
    if(set.has(coin)) {
        return set.get(coin)
    }
    let m=(parseInt(fun(coin/2,set))+parseInt(fun(coin/3,set))+parseInt(fun(coin/4,set)))
    set.set(coin,Math.max(coin,m))
    return set.get(coin)
}

    if (process.env.USERNAME === 'Rohan') {
        runProgram(`504
        354
        910
        676
        478
        831
        523
        23
        382
        371`);
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

   
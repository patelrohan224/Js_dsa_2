function runProgram(input) {
    input = input.trim().split("\n")
    let arr = input[1].trim().split(" ").map(Number).sort((a, b) => {
        return a - b
    })
    for (let i = 3; i < input.length; i++) {
        let key = input[i].trim().split(" ").map(Number)
        if (key[0] == 1) {
            console.log(
                (arr.length - UpperBound(arr, 0, arr.length, key[1])))
        } else {
            console.log(
                (arr.length - lowerBound(arr, 0, arr.length, key[1])))
        }
    }
}

function lowerBound(arr, s, e, key) {
    while (s < e) {
        let mid = (s + e) >> 1
        if (arr[mid] >= key) {
            e = mid
        } else {
            s = mid + 1
        }
    }
    return s
}

function UpperBound(arr, s, e, key) {
    while (s < e) {
        let mid = s + e >> 1
        if (arr[mid] <= key) {
            s = mid + 1
        } else {
            e = mid
        }
    }
    return s
}


if (process.env.USERNAME === 'Rohan') {
    runProgram(`4
    1 2 3 4
    3
    0 5
    1 3
    0 3`);
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
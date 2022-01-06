function runProgram(input) {
    input=input.trim().split("\n")
    for (let i = 1; i <input.length; i=i+2) {
        let array=input[i].trim().split(" ").map(Number)
        let array2=input[i+1].trim().split(" ").map(Number)
        // console.log('array:', array,array2)
        fun(array[1],array2)
        console.log(count);
        count=0
    }
}
let count=0
function fun(target,array) {
    let sum=0
    for (let i = 0; i < array.length; i++) {
        sum=array[i]
        for (let j = i+1; j <=array.length; j++) {
            if(sum<=target){
                count++
            }
                sum=sum+array[j]
        }
    }
    return "No"
}

if (process.env.USERNAME === 'Rohan') {
    runProgram(`1
    7 20
    2 6 4 3 6 8 9`);
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


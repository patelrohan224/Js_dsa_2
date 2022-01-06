function runProgram(input) {
    input=input.trim().split("\n")
    for (let i = 2; i <input.length; i=i+3) {
        let array=input[i].trim().split(" ").map(Number)
        let array2=input[i+1].trim().split(" ").map(Number)
        // console.log('array:', array,array2)
        fun(array,array2)
    }
}
function fun(array,array2) {
let left=0
let right=array.length-1
let count=0
while (left < array.length && right>=0) {
        if(array[left] < array2[right]){
            left ++
        }else if(array[left] > array2[right]){
            right--
        }else{
            count++
            left++
            right--
        }
}
console.log(count);
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`5
    8
    1 2 3 5 8 8 9 9
    8 8 6 5 3 2 1 1
    9
    2 3 3 3 7 7 9 9 9
    9 9 9 8 6 5 4 3 1
    2
    4 7
    4 2
    3
    3 7 7
    8 5 1
    4
    2 7 7 8
    9 7 6 3`);
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

    // 6
    // 4
    // 1
    // 0
    // 1



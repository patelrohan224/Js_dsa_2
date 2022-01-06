function runProgram(input) {
    input=input.trim().split("\n")
    for (let i = 1; i <input.length; i=i+2) {
        let sum=input[i].trim().split(" ").map(Number)
        let array=input[i+1].trim().split(" ").map(Number)
        console.log(fun(sum[1],array))
    }
}
// function fun(target,array) {
//     let sum=0
//     for (let i = 0; i < array.length; i++) {
//         sum=array[i]
//         for (let j = i+1; j <=array.length; j++) {
//             if(sum===target){
//                 return "Yes"
//             }
//             if(sum>target || j==array.length){
//                 break
//             }
//                 sum=sum+array[j]
//         }
//     }
//     return "No"
// }

function fun(target,array){
    let sum=array[0]
    let l=0
    for (let i = 1; i <=array.length; i++) {
        while (sum>target && l<i-1)
        {
            sum=sum-array[l]
            l++
        }
        if(sum==target){
            return "Yes"
        }
        sum=sum+array[i]
    }
    return "No"
}


if (process.env.USERNAME === 'Rohan') {
    runProgram(`3
    5 3
    1 2 1 3 4
    4 5
    1 2 1 3
    3 2
    1 2 1`);
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


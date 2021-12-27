function runProgram(input) {
    input=input.trim().split("\n");
   // console.log('input:', input)
   for (let i = 1; i < input.length; i=i+2) {
       let target=input[i].trim().split(" ").map(Number)
       let string=input[i+1].trim().split(" ").map(Number).sort((a,b) =>{return a-b})   
    console.log( fun(string,target[1]))
   }
}
// function fun(array,target) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if(array[i]+array[j]==target) {
//                 return "1"
//             }
//         }
//     }
//     return "-1"
// }

function fun(array,sum) {
    let map=new Map()
    for (let i = 0; i < array.length; i++) {
        if(map.has(sum-array[i])){
            return "1"
        }
        if(map.has(array[i])){
            map.set(array[i],map.get(array[i])+1)
        }else{
            map.set(array[i],1)
        }
    }
    // console.log(map);
    return "-1"
}
   if (process.env.USERNAME ==='Rohan') {
     runProgram(`1
     5 2
     3 4 0 2 7`);
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
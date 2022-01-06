
function runProgram(input) {
    var arr=input.split("\n")
    for (let i =2; i < arr.length; i=i+2) {
        let array=arr[i].trim().split(" ").map(Number)
        fun(array)
    }
}
function fun(array) {
    let min_index=0
    let count=1
    for (let i = 1; i < array.length; i++) {
        if(array[min_index]==array[i]){
            count++
        }else{
            count--
        }
        if(count==0){
            min_index=i
            count=1
        }   
    }
    console.log(min_index>=Math.min(array.length)/2? "-1" :array[min_index])
}
 
     if (process.env.USERNAME ==='Rohan') {
       runProgram(`2
       6
       1 1 1 1 2 3
       5
       1 1 2 2 3`);
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
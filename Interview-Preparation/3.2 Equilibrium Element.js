
function runProgram(input) {
    var arr=input.split("\n")
    for (let i =1; i < arr.length; i++) {
        let array=arr[i].trim().split(" ").map(Number)
        fun(array)
    }
}
function fun(array) {
    let sum=0
    let leftsum=0
    for (let i = 0; i < array.length; i++) {
        sum+=array[i]
    }
    for (let i = 0; i < array.length; i++) {
        sum-=array[i]
        if(leftsum==sum){
            console.log(i+1);
            return
        }
        leftsum+=array[i]
    }
    console.log("-1");
    return
}
 
     if (process.env.USERNAME ==='Rohan') {
       runProgram(`5
       3 3 5 5 1`);
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
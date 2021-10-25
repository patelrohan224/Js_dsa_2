function runProgram(input) {
    input =input.trim().split(" ")
    let l1=input[0].trim().split(" ").map(Number)
    let l2=input[1].trim().split(" ").map(Number)
//    fun(l1,l2)

let k=0
   console.log(fun(l1,l2,k))

}

function fun(l1,l2,k) {
   if(k==l2){
       return 1
   }
   return l1*fun(l1,l2,k+1)
  
}
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`2 4`);
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
function runProgram(input) {
    input=input.trim().split(" ").map(Number)
   let l1=input[0]
   let l2=input[1]
   console.log(fib(l2,l1).toFixed(4));
   
       }
    
       function fib(l1,l2){
           if(l2==0){
               return 1
           }
           let r=fib(l1,l2-1)
          
           return r+(1/(l1**l2))
   
       }
       if (process.env.USERNAME === 'Rohan') {
           runProgram(`3 5`);
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
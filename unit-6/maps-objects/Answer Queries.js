function runProgram(input) {
    input=input.trim().split("\n");
   // console.log('input:', input)
   let string=input[1].trim().split(" ").map(Number)
   let set=new Set();
   for (let i = 0; i < string.length; i++) {
    set.add(string[i]);
   }
   let arr=input[3].trim().split(" ").map(Number)
   for (let i = 0; i < arr.length; i++) {
       if(set.has(arr[i])) {
           console.log("YES");
       }
       else{
           console.log("NO");
       }
   } 
}


   if (process.env.USERNAME ==='Rohan') {
     runProgram(`5
     1 2 3 4 5
     3
     3 5 7`);
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
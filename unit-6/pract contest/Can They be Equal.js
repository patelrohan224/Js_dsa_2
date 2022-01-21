function runProgram(input) {
    input =input.trim().split("\n")
    
    for(let i=2;i<input.length;i=i+3){
        let l1=input[i].trim().split("").sort()
        let l2=input[i+1].trim().split("").sort()
        fun(l1,l2)
    }
}
function fun(l1,l2){
    for(let i=0;i<l1.length;i++){
      if(l1[i]!=l2[i]){
          console.log("No")
          return 
      }
    }
    console.log("Yes")
}


    if (process.env.USERNAME === 'Rohan') {
        runProgram(`2
        2
        ab
        ac
        3
        aba
        aab`);
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
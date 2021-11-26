function runProgram(input) {
    input=input.trim().split("\n")
    let key= input[0].trim().split(" ").map(Number)
   for (let i = 1; i <input.length; i=i+3) {
    let boys= input[i+1].trim().split(" ").map(Number).sort((a,b)=>{return a-b})
    
    let girls= input[i+2].trim().split(" ").map(Number).sort((a,b)=>{return a-b})
    
    // fun(boys,girls)
    console.log(fun(boys,girls))
       
   }
    
   
}
function fun(boys,girls){
    for (let i = 0; i < boys.length; i++) {
        for (let j = 0; j < girls.length; j++) {
            if(girls[i]<boys[i]){
              break
            } 
            else{           
                return "NO"
            } 
          }
      }
      return "YES"
}

    if (process.env.USERNAME === 'Rohan') {
        runProgram(`1
        4 5
        2 5 6 8
        3 8 5 1 7
        4 5
        2 5 6 8
        3 8 5 1 7`);
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
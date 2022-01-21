function runProgram(input) {
    input =input.trim().split("\n")
    
    for(let i=1;i<input.length;i++){
        let l1=input[i].trim().split(" ").map(Number)
        console.log(l1-1)
    }
}
function fun(l,c){
    if(l<=1){
        return c
    }
    else if(l%2==0){
      return  fun(l/2,c+1)
    }else{
        return  fun(l-1,c+1)
    }
    return c
}


    if (process.env.USERNAME === 'Rohan') {
        runProgram(`2
        2
        3`);
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
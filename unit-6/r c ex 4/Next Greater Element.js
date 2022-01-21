function runProgram(input) {
    input=input.trim().split("\n")
    for (let i = 2; i < input.length; i=i+2) {
    let arr=input[i].trim().split(" ").map(Number)
    fun(arr)
        
    }
}
function fun(array) {
    let result=[]
    let stack=[]
    for (let i = array.length-1; i >=0; i--) {
        while(stack.length!==0 && array[i]>=array[stack[stack.length-1]]){
            stack.pop()
        }        
        if(stack.length==0){
            result.push(-1)
        }else{
            result.push(array[stack[stack.length-1]])
        }
        stack.push(i)
    }
    console.log(result.reverse().join(" "));
}

if (process.env.USERNAME === 'Rohan') {
    runProgram(`1
    4
    1 3 2 4`);
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


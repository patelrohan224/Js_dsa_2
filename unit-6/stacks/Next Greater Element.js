function runProgram(input) {
    input=input.trim().split("\n")
    for (let i = 2; i < input.length; i=i+2) {
    let arr=input[i].trim().split(" ").map(Number)
    fun(arr)
        
    }
}
function fun(array) {
    let rs=[]
    let ar=[]
        for (let i = array.length-1; i >=0; i--) {
        while (ar.length!==0 && array[i]>=ar[ar.length-1]){
        ar.pop()        
        }
        if(ar.length==0){
            rs.push("-1")
        }else{
            rs.push(ar[ar.length-1])
        }
        ar.push(array[i])
        }
        console.log(rs.reverse().join(" "));
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


function runProgram(input) {
    input=input.trim().split('\n')   
        let a=input[1].trim().split(" ").join("")
        let rs=""
        fun(a,rs)
}

function fun(n,rs){
    if(n.length==0){
        console.log(rs.split("").join(" "));
        return
    }
    for (let i = 0; i < n.length; i++) {
        let c=n[i]
        let left=n.slice(0,i)
        let right=n.slice(i+1)
        let newStr=left+right
        fun(newStr,rs+c)
    }
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`3
    1 2 3`);
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


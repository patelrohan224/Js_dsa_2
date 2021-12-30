function runProgram(input) {
    input=Number(input);  
    let arr=[]
    for (let i = 1; i <=input; i++) {
        arr.push(i)
    }

        let a=arr
        let rs=[]
        let c=0
        fun(a,rs,a.length,c)
}

function fun(n,rs,len,c){
    if(rs.length==0){
        console.log("")
        
    }
    if(rs.length>0){
        console.log(rs.join(" "))
        
    }
    if(c===len){
        return 
    }
    for (let i = c; i < len; i++) {
        rs.push(n[i])
        fun(n,rs,len,i+1)
        rs.pop()
    }
    return
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`3`);
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


function runProgram(input) {
    input=input.trim().split("\n")   
    let array=input[1].trim().split(" ").map(Number)
    fun(array,0,array.length,[])
    console.log(count);
}
let count=0
function fun(ar,l,h,rs){
    if(rs.length>0){
    let sum=0
    for (let i = 0; i <rs.length; i++) {
        sum+=rs[i]
    }
    if(sum%2!=0){
        count++
    }
  
    }
     if(h==l){
        return 
    }
        for (let i = l; i <h; i++) {
            rs.push(ar[i])
            fun(ar,i+1,h,rs)
            rs.pop()
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


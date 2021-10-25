function runProgram(input) {
    input =input.trim().split("\n")
    input = input[1].trim().split(" ")
   
    
    let rs=""
    let ii=-1
   fun(input[0],input[0].length,rs,ii)
    
}

function fun(a,len,rs,l) {
    
    if (rs.length>0) {
    console.log(rs);
    }
    if (l==len){
    return;}
    for (let i = l+1; i <len; i++) {
        rs+=a.charAt(i)
        fun(a,len,rs,i);
        
        rs=rs.substring(0,rs.length-1);
    }
    return

}
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`4
abcd`);
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
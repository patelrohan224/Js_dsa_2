function runProgram(input) {
    input=input.trim().split("\n")
for (let i = 2; i <input.length; i=i+2) {
    let arr=input[i].trim().split(" ").map(Number)
        fun(arr)
}
    }
    function fun(array) {  
        let rs=[]
        let s=[]
        for (let i = array.length-1; i >=0; i--) {
            while(rs.length!==0 && array[i]>=rs[rs.length-1]){
                rs.pop()
            }
            if(rs.length==0){
              s.push("-1")
            }else{
               s.push(rs[rs.length-1])
            }
           rs.push(array[i])
        }
        console.log(s.reverse().join(" "));
}
    // pending
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
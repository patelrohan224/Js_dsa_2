function runProgram(input) {
    input =input.trim().split(" ").map(Number)
    let arr=[]
   for (var i = 1; i <=input; i++){
arr.push(i)
   }
//    console.log(arr);
     
    let rs=[]
 
    
   fun(arr,rs,0)
    
}

function fun(a,rs,l) {
    
    if(rs.length==0){
        console.log(" ");
    }
   
    if (rs.length>0) {
        console.log(rs.join(" "));
    }
    if (l==a.length){
    return;}
for (let i = l; i <a.length; i++) {
        rs.push(a[i])
        fun(a,rs,i+1);
        rs.pop();
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
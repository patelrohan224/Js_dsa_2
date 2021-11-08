function runProgram(input) {
    input =input.trim().split("\n")
    input = input[1].trim().split(" ").map(Number)
    input=input.map(Number).sort((a,b) =>{return(a-b)})
    let rs=[]
    let ii=-1
   fun(input,input.length,rs,ii)
//    console.log(stack);
  
}
let stack=new Set();
function fun(a,len,rs,l) {
    if(rs.length==0){
        console.log(" ");
    }
    if (rs.length>0) {
        if(stack.size==0){
            rs=rs.map(Number).sort((a,b) =>{return(a-b)})
            stack.add(rs.join(" "))
            console.log(rs.join(" "));
        }
        if(stack.has(rs.join(" "))){
           
        }else{
           rs=rs.map(Number).sort((a,b) =>{return(a-b)})
           stack.add(rs.join(" "))
           console.log(rs.join(" "));}

    }
    if (l==len){
    return;}
    for (let i = l+1; i <len; i++) {
        rs.push(a[i])
        fun(a,len,rs,i);
        rs.pop(0,a[rs.length-1]);
    }
    return

}
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`3
        10 3`);
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
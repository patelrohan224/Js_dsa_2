function runProgram(input) {
    input =input.trim().split("\n")
  for (let i = 2; i < input.length; i=i+2) {
      let len=input[i].trim()
      let k=0
      let j=len.length-1
      let rs= ""
      console.log( fun(len,k,j,rs))
      
  }
  
}
function  fun(a,i,j,ans) {

   
        if (i>j){ return ans}
        let mid = Math.floor((i + j)/2);
        return ans+ a.charAt(mid) + fun(a,i,mid-1,ans) + fun(a,mid+1,j,ans);
        
}


    if (process.env.USERNAME === 'Rohan') {
        runProgram(`3
        3
        abc
        4
        abcd
        11
        abcdefghijk`);
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
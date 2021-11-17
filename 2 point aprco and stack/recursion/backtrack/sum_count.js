function runProgram(input) {
  input=input.trim().split("\n")
  let ss=input[0].trim().split(" ").map(Number)
  let len=input[1].trim().split(" ").map(Number)
  let ar=[]
  let l=0
  count=0
  fun(len,ar,l,ss[1])
  console.log(count)
}
  let count=0
  function fun(str,stack,l,k) {
     
      if(stack.length>0){
          let rs=0
          for (let i = 0; i < stack.length; i++) {
              rs+=Number(stack[i])
          }
        if(rs==k){
          count++
          return 
      }
      }
      if(l==str.length){
          return 
      }
      for (let i = l; i < str.length; i++) {
         stack.push(str[i])
         fun(str,stack,i+1,k)
         stack.pop(str.length-1)
      }
  
  }
  
  if (process.env.USERNAME === 'Rohan') {
      runProgram(`4 10
      1 2 3 4`);
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
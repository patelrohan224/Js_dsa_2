function runProgram(input) {
  input=input.trim().split("\n")
  let rs=input[1].trim().split(" ")
  let ar=[]
  let l=0
     fun(rs,ar,l)
     console.log(count);
  }
  let count=0
  
  function fun(str,stack,l) {
     
      if(stack.length>0){
      // console.log(stack);
          let rs=0
          for (let i = 0; i < stack.length; i++) {
            rs+=Number(stack[i])
          }
          if(rs%2!=0){ 
              count+=1
          }
      }
      if(l==str.length){
          return
      }
      for (let i = l; i < str.length; i++) {
         stack.push(str[i])
         fun(str,stack,i+1)
         stack.pop(str.length-1)
      }
  }
  
  if (process.env.USERNAME === 'Rohan') {
      runProgram(`2
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
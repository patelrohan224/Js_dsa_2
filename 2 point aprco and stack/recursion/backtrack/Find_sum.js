function runProgram(input) {
  input=input.trim().split("\n")
 for (let i = 2; i < input.length; i=i+2) {
     let len=input[i].trim().split(" ").map(Number)
  // console.log(len);
  let ar=[]
      let l=0
     
      let min=len[0]
          for (let i = 0; i < len.length; i++) {
              if(len[i]>=min){
            min=len[i]  
          }}
// console.log(min);
    fun(len,ar,l,min)

  if(count){
        console.log("Yes");}else{console.log("No") }
     count=false
  //   
 }
    
   
  }
  let  count=false
  function fun(str,stack,l,min) {
     
      if(stack.length>0){
      // console.log(stack);
          let rs=0
           
           for (let i = 0; i < stack.length; i++) {
               if(min!==stack[i])
             {rs+=Number(stack[i])}
              }
              // console.log(stack);
              // console.log("min",min);
          // console.log("rss",rs);

        if(rs==min ){
          //   console.log("-------------");
          count=true
          return
        }
      }
      if(l==str.length){
          return 
      }
      for (let i = l; i < str.length; i++) {
         stack.push(str[i])
         fun(str,stack,i+1,min)
         stack.pop(str.length-1)
      }
  }
  
  if (process.env.USERNAME === 'Rohan') {
      runProgram(`10
      6
      8 7 4 6 0 3`);
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
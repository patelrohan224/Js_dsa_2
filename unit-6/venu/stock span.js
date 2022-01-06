function runProgram(input) {
    input=input.trim().split("\n")
    let ar=[]
    for (let i = 2; i < input.length; i=i+2) {
        let str=input[i].trim().split(" ").map(Number)
        fun(str)
        
    }
  
    }
    
    function fun(array) {
        let rs=[]
        let s=[]
        // rs.push([1,array[0]])
        // console.log(rs);
        for (let i=0; i<array.length; i++){
            while(rs.length!==0 && array[i]>=array[rs[rs.length-1][0]]){
              // console.log(array[i],rs);
                rs.pop()
            }
            if(rs.length==0){
              s.push(i+1)
            }else{
               s.push(i-rs[rs.length-1][0])
            }
           rs.push([i,array[i]])
        }
        console.log(s.join(" "));
    }
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`1
        4
        100 80 60 70 60 75 85`);
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
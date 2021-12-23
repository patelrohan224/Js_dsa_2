  function runProgram(input) {
    input=input.trim().split("\n")
    let ar=input[1].trim().split(" ").map(Number)
    fun(ar)
    }
    function fun(array) {
      let ar=[]
      let rs=[]
      let x=-1
       for (let i = 0; i < array.length; i++) { 
        while(ar.length!==0 && array[i]<=ar[ar.length-1]){
          ar.pop()
        }
        if(ar.length==0){
          rs.push("-1")
          
        }else{
          rs.push(ar[ar.length-1])
        }
        ar.push(array[i])
    }
    console.log(rs.join(" "));
  }
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`8
        39 27 11 4 24 32 32 1`);
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
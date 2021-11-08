function runProgram(input) {
    input = input.split("\n");
    let [rs, n] = input[0].trim().split(" ").map(Number);
    let len = input[1].trim().split(" ").map(Number);
    let count = 0;
  let qq=0
      mover(rs,len,qq,n);
  
    function mover(rs,len,qq,n) {
        if(rs < qq ){
          return;
        }
        if(rs == qq){
            count++;
        }
        for(let i=0;i<n;i++){
            mover(rs,len,qq+len[i],n);
        }
    }
    console.log(count);
  }
  if (process.env.USERNAME === "Rohan") {
    runProgram(`3 3
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
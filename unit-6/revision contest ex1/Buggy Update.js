function runProgram(input) {
    input =input.trim().split("\n")
    
    for(let i=1;i<input.length;i=i+2){
        let l1=input[i].trim().split(".").map(Number)
        let l2=input[i+1].trim().split(".").map(Number)
       
        console.log( fun(l1,l2))
    }
}
function fun(a,b){
  if(a[0]<b[0]){
      return "True"
  }else if(a[0]==b[0]){
    if(a[1]<b[1]){
        return "True"
    }else if(a[1]==b[1]){
        if(a[2]<b[2]){
            return "True"
        }else if(a[2]==b[2]){
            return "True"
        }else{
            return "False"
        }
    }else{
        return "False"
    }
  }
  else{
      return "False"
  }
}


    if (process.env.USERNAME === 'Rohan') {
        runProgram(`3
        2.0.1
        1.9.8
        12.0.1
        12.10.0
        83.67.71
        99.11.49`);
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
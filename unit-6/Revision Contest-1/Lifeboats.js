function runProgram(input) {
    input=input.trim().split("\n")

    for (let i = 1; i < input.length; i=i+2) {

       var str=input[i+1].trim().split(" ").map(Number)
       let kap=input[i].trim().split(" ").map(Number)
       fun(str,kap[1])
        console.log("-");
    }
}
function fun(array,kap) {
    // array=array.sort()
   let s=1  
   let c=0
   for (let i = 0; i < array.length; i++) {
        if(kap>c)
        {
            c+=array[i]
            console.log('c:', c,s)
        }
        if(kap<c){
            s++
            c=0
        }    
   }
   console.log(s);
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`2
    4 5
    3 5 3 4
    4 3
    1 2 2 3`);
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


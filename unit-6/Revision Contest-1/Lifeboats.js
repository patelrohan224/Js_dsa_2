function runProgram(input) {
    input=input.trim().split("\n")

    for (let i = 1; i < input.length; i=i+2) {

       var str=input[i+1].trim().split(" ").map(Number).sort((a,b)=>{return a-b})
       let kap=input[i].trim().split(" ").map(Number)
       fun(str,kap[1])
    }
}
function fun(ar,kap) {
  let l=0
  let h=ar.length-1
  let c=0
  while(l<=h){
    c++
    if((ar[l]+ar[h])<=kap){
      l++  
    }
    h--
  }
  console.log(c)
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


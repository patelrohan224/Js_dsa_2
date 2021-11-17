function runProgram(input) {
    input =input.trim().split("\n")
   for (var i = 1; i < input.length; i++) {
    let str=input[i].trim().split(" ").map(Number)
    let rs=[]
    let sr=  fun(str[0],rs)
    console.log(sr.reverse().join(''))
   }    
}

function fun(n,rs) {
  if(n==0)
  {return rs}
  let op=Math.floor(n/2)
 rs.push(n%2)
 return fun(op,rs)
}

    if (process.env.USERNAME === 'Rohan') {
        runProgram(`2
        15
        128`);
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
function runProgram(input) {
    input=input.trim().split("\n")
    // console.log('input:', input)
    let ch=0
    let len=input[1].trim().split(" ").map(Number)
    let num=input[0].trim().split(" ").map(Number)
    console.log(fun(len,num[1]));
    }
function fun(array,n) {
  let obj=[]
  let temp
  let rs=0
  // rs+=n
  let t=0
  for (let i = 0; i < array.length; i++) {
    temp=array[i]
    t=n-temp
    obj.push([i,array[i]])
  }
  console.log(obj);
  
  return rs
}
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`4 7
          3 5 1 4`);
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
function runProgram(input) {
    input=input.trim().split("\n")
    for (let i = 2; i < input.length; i=i+2) {
    let arr=input[i].trim().split(" ").map(Number)
    // console.log('arr:', arr)
    let rs=[]
    let l=0
    fun(arr,rs,l)
    console.log(maxsum);
    maxsum=-Number.MAX_VALUE
    }
}

let maxsum=-Number.MAX_VALUE
function fun(arr,rs,l){
    let sum=0
  for (let i = 0; i < arr.length; i++) {
        sum+=arr[i]
        if(sum>maxsum){
            maxsum=sum
        }
        if(sum<0){
            sum=0
        }
    }
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`3
    3
    1 2 3
    4
    -1 -1 0 1
    3
    2 -1 2`);
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


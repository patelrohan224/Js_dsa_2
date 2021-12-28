function runProgram(input) {
    input=input.trim().split("\n")
    for (let i = 2; i < input.length; i=i+2) {
    let arr=input[i].trim().split("").sort()
        // console.log('arr:', arr)
        console.log(fun(arr))
        
    }
}
function fun(array) {
 let map=new Map();
 for (let i=0; i < array.length; i++) {
     if(map.has(array[i])) {
         map.set(array[i],map.get(array[i])+1);
     }else{
         map.set(array[i],1)
     }
 }
 let c=0
 for (const [key, value] of map.entries()) {
     if(value%2!==0){
         c++
        }
  }
    if(c>1){
      return "Not Possible!"
    }   
return "Possible!"
}

if (process.env.USERNAME === 'Rohan') {
    runProgram(`2
    6
    aabbcc
    5
    aabcd`);
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


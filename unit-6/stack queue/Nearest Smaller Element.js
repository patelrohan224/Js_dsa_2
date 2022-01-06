function runProgram(input) {
    input=input.trim().split("\n")
    for (let i = 2; i < input.length; i=i+2) {
    let arr=input[i].trim().split(" ").map(Number)
    let ar1=fun(arr)
    let ar2=fun2(arr) 
      for (let i = 0; i < ar1.length; i++) {
        arr[i]=Math.abs(ar1[i]*ar2[i])
      }
      console.log(ar1)
      console.log(ar2);
      console.log(arr);
      console.log("27 11 4 1 4 24 1 -1 ");
    }
}
function fun(array) {
  let rs=[] 
  rs.push(-1)
  for (let i = 1; i < array.length; i++) {
    let temp=-1
    for (let j =i; j >=0; j--) {
      if(array[i]>array[j]){
        temp=array[j]
        break
      }
    }
    rs.push(temp)
  }
  return rs
}
function fun2(array) {
  let rs=[]
  for (let i = 0; i < array.length; i++) {
    let temp=-1
    for (let j =i+1; j <array.length; j++) {
      if(array[i]>array[j]){
        temp=array[j]
        break
      }
    }
    rs.push(temp)  
  }
 return rs
}

if (process.env.USERNAME === 'Rohan') {
    runProgram(`1
    8
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


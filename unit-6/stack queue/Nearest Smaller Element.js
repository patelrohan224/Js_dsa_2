function runProgram(input) {
    input=input.trim().split("\n")
    for (let i = 2; i < input.length; i=i+2) {
    let arr=input[i].trim().split(" ").map(Number)
    let ar1=fun(arr)
    let ar2=fun2(arr) 
    // console.log(arr);
    // console.log(ar1,ar2);
    let ResultArr=[]
      for (let i = 0; i < ar1.length; i++) {
        if(ar1[i]=="-1" && ar2[i]=="-1"){
          ResultArr.push(-1)
        } 
        else if(ar1[i][1]<ar2[i][1] || ar1[i][1]==ar2[i][1] || ar2[i]=="-1")
        {
            ResultArr.push(ar1[i][0])
          }else{
            ResultArr.push(ar2[i][0])
          }
    }
    console.log(ResultArr.join(" "));
    // -1 1 4 6 1 4 4
  }
}
function fun(array) {
  let rs=[] 

  for (let i = 0; i < array.length; i++) {
    let temp=-1
    for (let j =i; j >=0; j--) {
      if(array[i]>array[j]){
        temp=[array[j],Math.abs(i-j)]
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
        temp=[array[j],Math.abs(i-j)]
        break
      }
    }
    rs.push(temp)  
  }
 return rs
}

if (process.env.USERNAME === 'Rohan') {
    runProgram(`1
    7
    1 4 6 8 4 7 5`);
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


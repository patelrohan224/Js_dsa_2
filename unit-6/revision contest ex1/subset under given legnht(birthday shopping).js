function runProgram(input) {
  input=input.trim().split(' ').map(Number)
  let rs=[]
  for (let i = 1; i <=input[0]; i++) {
    rs.push(i)
  }
  fun(rs,[],0,input[1])
}

function fun(arr,rs,l,k){
  if(rs.length==k){
    let temp=[]
    let 
    for (let i = 0; i <k; i++) {
      temp.push(rs[i])
    }
    console.log(temp.join(' '));
  }
  else if(l==arr.length){
    return
  }
  for (let i = l; i <arr.length; i++) {
    rs.push(arr[i])
    fun(arr,rs,i+1,k)
    rs.pop()
  }
}
  if (process.env.USERNAME === 'Rohan') {
      runProgram(`3 2`);
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
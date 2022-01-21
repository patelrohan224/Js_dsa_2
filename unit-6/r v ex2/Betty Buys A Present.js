function runProgram(input) {
  input=input.trim().split(' ').map(Number)
  let rs=[]
  for (let i = 1; i <=9; i++) {
    rs.push(i)
  }
  fun(rs,[],0,input[1],input[0])
  if(flag==false){
    console.log("-1");
  }
}
let flag=false
function fun(arr,rs,l,k,sum){
  if(rs.length==k){
    let temp=[]
    let su=0
    for (let i = 0; i<k; i++) {
      temp.push(rs[i])
      su+=rs[i]
    } 
    
    if(su==sum){
      flag=true
      console.log(temp.join(' '));
    }
  }
  else if(l==arr.length){
    return
  }
  for (let i = l; i <arr.length; i++) {
    rs.push(arr[i])
    fun(arr,rs,i+1,k,sum)
    rs.pop()
  }
  return 
}
  if (process.env.USERNAME === 'Rohan') {
      runProgram(`18 3`);
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
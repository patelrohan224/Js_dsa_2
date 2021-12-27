function runProgram(input) {
    input=input.trim().split("\n")
        for (let i = 2; i < input.length; i=i+2) {
            let ar=input[i].trim().split(" ").map(Number)
            console.log(ar);
            fun(ar)
        }
    }
    let ar=[]
let top=-1
function push(str) {
  ar[++top]=str
}
function pop() {
  if(top==-1){
    return "Empty"}
    let ans=ar[top]
    top--
    return ans
  
}
function peek() {
  if(top==-1){
    return "Empty"}
    return ar[top]
}
function empty() {
  return top==-1
}

    function fun(array) {
      let rs=[]
      let x=-1
       for (let i = array.length-1; i >=0; i--) { 
        while(empty()!==true && array[i]<=ar[top]){
          pop()
        }
        if(empty()==true){
          rs.push("-1")
          
        }else{
          rs.push(ar[top])
        }
        push(array[i])
    }
    console.log(rs.join(" "));
    ar=[]
  }
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`1
        8
        39 27 11 4 24 32 32 1
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
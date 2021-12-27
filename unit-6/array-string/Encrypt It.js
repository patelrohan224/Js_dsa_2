function runProgram(input) {
     input=input.trim().split("\n");
    // console.log('input:', input)
    let string=input[0].trim().split(" ")
    let incremnet=Number(input[1])
    // console.log('string:', string,incremnet)
    fun(string[0],incremnet)
    
    
}
let  capa="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let smala="abcdefghijklmnopqrstuvwxyz"
let num="0123456789"
function fun(str,a) {
    let rs=""
for (let i = 0; i < str.length; i++) {
    if(str.charAt(i)>="a" && str.charAt(i)<="z" || str.charAt(i)>="A" && str.charAt(i)<="Z" ){
      for (let j = 0; j < smala.length; j++) {
        if(str.charAt(i)==smala[j]){
          rs+=smala[(a+j)%smala.length]
        }else if(str.charAt(i)==capa[j]){
          rs+=capa[(a+j)%smala.length]
        }
            // console.log('str.charCodeAt(i)+4:', str.charCodeAt(i)+4)
            // console.log('rs:', rs)
        }
    }else if(str.charAt(i)>="0" && str.charAt(i)<="9"){
      for (let j = 0; j < num.length; j++) {
        if(str.charAt(i)==num[j]){
          rs+=num[(a+j)%num.length]
        }
      }
    }
    else{
        // console.log('str.charAt(i):', str.charAt(i))
        rs+=str.charAt(i)
    }
}
console.log(rs);
}

    if (process.env.USERNAME ==='Rohan') {
      runProgram(`All-convoYs-9-be:Alert1.
      4`);
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
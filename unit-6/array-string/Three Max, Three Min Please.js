function runProgram(input) {
    input=input.trim().split("\n")
    let arr=input[1].trim().split(" ").map(Number).sort((a,b)=>{return a-b})
    // console.log('arr:', arr)
    fun(arr)
}

function fun(arr) {
let set=new Set();
    for (let i = 0; i < arr.length; i++) {
    if(set.has(arr[i]))
    {    
    }else{
        set.add(arr[i])
    }
    }
    set=Array.from(set)
    let ar=[]
    let ar2=[]
for (let i = 0; i < 3; i++) {
    if(set[i]!==undefined){

        ar.push(set[i])
    }
}
for (let i = set.length-1; i >=set.length-3; i--) {
    if(set[i]!==undefined){

        ar2.push(set[i])
    }
}
if(ar.length==3 && ar2.length==3){

    console.log(ar.join(" "));
    console.log(ar2.reverse().join(" "));
}else{
    console.log("Not Possible");
    console.log("Not Possible");
}
}

    if (process.env.USERNAME ==='Rohan') {
      runProgram(`2
      4 5`);
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
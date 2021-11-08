function runProgram(input) {
    let len=input.trim().split(" ")
    fun(len.join(""))
}
  
function fun(arr){
    let obj={}
for (let i=0; i<arr.length; i++){
    if(obj[arr[i]]==undefined){
        obj[arr[i]]=1
    }else{
        obj[arr[i]]=obj[arr[i]]+1
    }
}
let ar=[]
for (const key in obj) {
      if(key%2!==0){
        ar.push(key)
      }
        
    }
    console.log(ar.join(""));
}

    if (process.env.USERNAME === 'Rohan') {
        runProgram(`my name is ankush`);
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
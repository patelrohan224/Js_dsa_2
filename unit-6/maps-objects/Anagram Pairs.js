function runProgram(input) {
    input = input.split('\n')
   let t = +input[0]
   let line=1;
   for(let i=0;i<t;i++){
    let q = +input[line++]
    let ar=[]
    for(let j=0; j<q;j++){
     ar.push(input[line++].trim().split('').sort().join(""))
    }
    // console.log('ar:', ar)
    fun(ar)
    console.log(count);
    count=0
   }
}
let count=0
function fun(array) {
    let mm={}
    for (let i = 0; i < array.length; i++) {
          if(mm[array[i]]==undefined){
            mm[array[i]]=1
          }else{
            mm[array[i]]=mm[array[i]]+1
          }
    }
for (const key in mm) {
    if (mm.hasOwnProperty.call(mm, key)) {
        count+=(mm[key]*(mm[key]-1)/2)
    }
}
   
}

   if (process.env.USERNAME ==='Rohan') {
     runProgram(`2
     5
     aaaaabbbbb
     baabbbbaaa
     aaaabbbbba
     xxxxxxxxxy
     yxxxxxxxxx
     2
     abcdefghij
     jighdefabc`);
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
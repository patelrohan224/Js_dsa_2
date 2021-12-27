function runProgram(input) {
    input = input.trim().split('\n')
    let ar=[]       
   for(let i=1;i<input.length;i++){
   ar.push(input[i].trim().split(" "))
   }
   
   fun(ar)
//    ar=[]
//    for(let i=1;i<input.length;i++){
//     ar.push(input[i].trim().split("").sort().join(""))
//     }
//    fun2(ar)
}
let count=0
function fun(array) {
    let mm=new Set()
    let ans=[]
    let tempword
    for (let i = 0; i < array.length; i++) {
        tempword = array[i][0]
        // console.log('tempword:', tempword)
        tempword=tempword.split("").sort().join("")
        // console.log("s");
        // console.log('tempword:', tempword)
      if(!mm.has(tempword)){
        ans.push(array[i])
        mm.add(tempword)
      }
    }
    let mp=new Map()
        for (let i = 0; i < array.length; i++) {

            let temp=array[i][0].split("").sort().join("")
            array[i]=temp

        if(mp.has(array[i])){
            mp.set(array[i],(mp.get(array[i]))+1)
        }else{
            mp.set(array[i],1)
        }   
    }
    console.log(mm.size);
    console.log(ans.sort().join("\n"));
}
// let count=-1
// function fun2(array) {
//     console.log('array:', array)
//     let mm=new Map()
//     for (let i = 0; i < array.length; i++) {
//         if(mm.has(array[i])){
//             mm.set(array[i],(mm.get(array[i]))+1)
//         }else{
//             mm.set(array[i],1)
//         }   
//     }
//     console.log(mm);
   
   
// }

   if (process.env.USERNAME ==='Rohan') {
     runProgram(`5
     eodc
     odec
     code
     baca
     aabc`);
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
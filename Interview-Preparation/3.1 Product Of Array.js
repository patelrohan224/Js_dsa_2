
function runProgram(input) {
    var arr=input.split("\n")
    for (let i =2; i < arr.length; i=i+2) {
        let array=arr[i].trim().split(" ").map(Number)
        fun(array,array.length)
    }
}
// function fun(array,n) {
//   let rs=[]
//   for (let i = 0; i < array.length; i++) {
//       let sm=1
//       for (let j = 0; j < array.length; j++) {
//           if(j!=i){
//             sm*=array[j]
//           }
//       }
//       rs.push(sm)
//   }
//   console.log(rs.join(" "));
// }

function fun(array,n) {
   let ar=new Array(n);
   let temp=1
   for (let i = 0; i < array.length; i++) {
       ar[i]=temp
       temp*=array[i]
   }
   temp=1
   for (let i = ar.length-1; i >=0;i--) {
       ar[i]=ar[i]*temp
       temp*=array[i]
    }
    console.log(ar.join(' '));
   
  }
     if (process.env.USERNAME ==='Rohan') {
       runProgram(`2
       5
       1 2 3 4 5
       3
       3 2 7`);
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
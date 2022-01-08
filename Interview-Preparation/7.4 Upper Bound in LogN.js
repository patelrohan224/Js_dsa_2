
function runProgram(input) {
    var arr=input.split("\n")
   
        let array=arr[1].trim().split(" ").map(Number)
        let key=arr[0].trim().split(" ").map(Number)
       fun2(key[1],array,0,array.length-1)
   
}
function fun2(n,array,l,h) {
    let temp=-1
   while(l<=h){
       let mid=Math.floor(l+(h-l)/2)
      //  console.log('mid:', mid)
       if(array[mid]<=n){
           l=mid+1
          //  console.log("up");
       }else{
        //  console.log("do");
           temp=mid
            h=mid-1
       }
   }
   console.log(temp);
}
     if (process.env.USERNAME ==='Rohan') {
       runProgram(`10 3
       0 2 4 4 5 5 7 7 9 10`);
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

   
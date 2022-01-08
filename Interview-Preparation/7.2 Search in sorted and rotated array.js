
function runProgram(input) {
    var arr=input.split("\n")
   
        let array=arr[1].trim().split(" ").map(Number)
        let key=arr[0].trim().split(" ").map(Number)
        console.log(fun2(key[1],array,0,array.length-1));
   
}
function fun2(n,array,l,h) {
  let mid=Math.floor(l+(h-l)/2)
  if(array[l]<n && n<=array[mid]){
    h=mid-1
    while(l<=h){
      let mid=Math.floor(l+(h-l)/2)
      if(array[mid]==n){
        return mid
      }
      if(array[mid]<n){
        l=mid+1
      }else{
        h=mid-1
      }
    }
  }else{
    l=mid+1
    while(l<=h){
      let mid=Math.floor(l+(h-l)/2)
      if(array[mid]==n){
        return mid
      }
      if(array[mid]<n){
        l=mid+1
      }else{
        h=mid-1
      }
  }

}
return -1
}
     if (process.env.USERNAME ==='Rohan') {
       runProgram(`15 14
       10 11 12 13 14 15 -1 0 1 2 3 4 5 7 8`);
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

   
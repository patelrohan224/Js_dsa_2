
function runProgram(input) {
    var arr=input.split("\n")
    for (let i =2; i < arr.length; i=i+2) {
        let array=arr[i].trim().split(" ").map(Number)
        fun(array,array.length)
    }
}
function fun(array,n) {
    let l=0,h=n-1,left=0,right=0,rs=0
    while(l<=h) {
        if(array[l]<array[h]){
        if(array[l]>left){
            console.log('array[l]:', array[l])
            left=array[l]
        }else{
            rs+=left-array[l]
            console.log('rs:', rs)
        }
        l++}
        else{
            if(array[h]>right){
                right=array[h]
            }else{
                rs+=right-array[h]  
            }
            h--
        }
    }
    console.log(rs);
}

     if (process.env.USERNAME ==='Rohan') {
       runProgram(`2
       5
       3 2 0 4 6
       7
       7 0 3 6 2 3 5`);
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
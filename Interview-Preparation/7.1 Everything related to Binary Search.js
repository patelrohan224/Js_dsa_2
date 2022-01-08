
function runProgram(input) {
    var arr=input.split("\n")
    for (let i =1; i < arr.length; i=i+2) {
        let array=arr[i].trim().split(" ").map(Number)
        let key=arr[i+1].trim().split(" ").map(Number)
        console.log(fun2(key[0],array,0,array.length-1));
    }
}
function fun2(n,array,l,h) {

    let temp=0
    let rs=[]
    let low
    let high
    if(l<=h){
        let mid=Math.floor(l+(h-l)/2)
        if(array[mid]==n){
            while (array[mid]==n) {
                mid--
            }
            if(mid==-1){
                low=0
            }else{
                low=mid+1
            }
            mid++
            while(array[mid]==n){
                mid++
                temp++
            }
            high=mid-1
                rs.push(low)
                rs.push(high)
                rs.push(temp)
        return rs.join(" ")
        
        }
        if(array[mid]>n){
           return fun2(n,array,l,mid-1)
        }else{
           return fun2(n,array,mid+1,h)
        }
    }
    return "-1 -1 0"
}

     if (process.env.USERNAME ==='Rohan') {
       runProgram(`7
       1 1 1 2 2 3 3
       2`);
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

   
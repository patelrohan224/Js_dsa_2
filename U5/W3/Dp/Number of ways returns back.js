function runProgram(input) {
    input =Number(input)
    let ar=new Array(input+1)
    for (let i = 0; i < ar.length; i++) {
        ar[i]=-1    
    }
    ar[0]=1
    ar[1]=1
       ar[2]=1
       ar[3]=2
    console.log(fibonaci(input,ar))
    // console.log(ar);
}


function fibonaci(n,ar) {
  
    if(ar[n]!=-1){
        return ar[n]
    }else{
   ar[n]=fibonaci(n-1,ar)+fibonaci(n-3,ar)+fibonaci(n-4,ar)
    return ar[n]}
}

    if (process.env.USERNAME === 'Rohan') {
        runProgram(`5`);
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

   
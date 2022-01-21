function runProgram(input) {
    input =Number(input)
    let ar=new Array(input+1).fill(-1)
    ar[0]=0
    ar[1]=1 
    console.log(fibonaci(input,ar))
    console.log(ar);
}


function fibonaci(n,ar) {
    if(ar[n]!=-1){
        return ar[n]
    }else{
        ar[n]=fibonaci(n-1,ar)+fibonaci(n-2,ar)
        return ar[n]
    }
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

   
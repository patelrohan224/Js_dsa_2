function runProgram(input) {
    input =input.trim().split("\n")
    let arr=input[1].trim().split(" ").map(Number).sort((a,b)=>{return a-b})
    let arr2=input[2].trim().split(" ").map(Number).sort((a,b)=>{return a-b})
    fun(arr,arr2)
}
function fun(a,a2) {
    let ar=[]
    for (let i = 0; i < a.length; i++) {
        ar.push(Math.abs(a[i]-a2[i]))
    }
    let min=ar[0]
    for (let i = 0; i < ar.length; i++) {
        if(min < ar[i]){min=ar[i]}
    }
 console.log(min);
   
}
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`3
        4 -4 2
        4 0 5`);
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

   
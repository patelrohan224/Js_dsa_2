function runProgram(input) {
    input =input.trim().split("\n")
    input = input[1].trim().split(" ").map(Number)
    let dp=new Array(input.length).fill(1)
    dp[0]=0
fun(input,dp)
}
function fun(a,dp) { 
    for (let i = 1; i < a.length; i++) {
        for (let j = 0; j < i; j++) {
            if(a[i]+j>=i) {
            dp[i]=Math.min(dp[i],dp[j]+1)
        }
    }
  }
  console.log(dp);
}
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`50
        17 13 19 5 7 5 9 2 17 18 18 9 12 9 8 19 24 22 6 20 13 8 24 12 25 9 12 10 21 19 5 23 9 4 23 16 25 9 1 3 15 22 24 12 5 19 2 9 20 13`);
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
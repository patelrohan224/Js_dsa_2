function runProgram(input) {
    input =input.trim().split("\n")
    input = input[1].trim().split(" ").map(Number)
    // console.log('input:', input)
    let dp=new Array(input.length).fill(1)
//   console.log(dp);

    fun(input,dp)
}

function fun(a,dp) {
  
  for (let i = 1; i < a.length; i++) {
      for (let j = 0; j < i; j++) {
          if(a[i]>a[j] && dp[i]<dp[j]+1) {
          dp[i]=dp[j]+1
      }
  }
}

let mx=dp[0]
for (let l = 0; l < dp.length; l++) {
if(mx<dp[l])
{mx=dp[l]}
}
console.log(mx);
}
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`9
        10 22 9 33 21 50 41 60 80`);
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
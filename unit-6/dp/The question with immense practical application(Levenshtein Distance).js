function runProgram(input) {
    input =input.trim().split("\n")
    for (let i = 1; i < input.length; i=i+2) {
    let key=input[i].trim().split("")
    let arr=input[i+1].trim().split("")
    let dp=[...Array(arr.length+1)].map(e => Array(key.length+1))
    fun(key,arr,key.length,arr.length,dp)  
    console.log(dp[arr.length][key.length]);
    }
}
function fun(st1,st2,l1,l2,dp) {
    for (let i = 0; i <=l1; i++) {
        dp[0][i]=i
    }
    for (let i = 0; i <=l2; i++) {
        dp[i][0]=i
    }
    for (let i = 1; i <=l2; i++) {
        for (let j = 1; j <= l1; j++) {
            let sub=(st1[i-1]===st2[j-1])?0:1
                dp[i][j]=Math.min(
                    dp[i-1][j]+1,
                    dp[i][j-1]+1,
                    dp[i-1][j-1]+sub)
        }   
    }    
}
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`3
        aaaaaaaaaaaaaaaaaaaaaaaXaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaXaaaaaaaaaaaaaaaaXaaaaaaaaaaaaaaaaaaaaXaaaaaaX
        aaaaaaaaaaaaaaaaaaaaaaabccccccbaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaabccccccbaaaaaaaaaaaaaaaaaa
        abc*efghijklm---nopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ
        abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLM+++NOPQRSTU*WXYZ`);
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



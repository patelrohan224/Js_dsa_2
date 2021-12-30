    function runProgram(input) {
        input =input.trim().split("\n")

        let key=input[0].trim().split("")
        let arr=input[1].trim().split("")
        let dp=[...Array(arr.length+1)].map(e => Array(arr.length+1))
    fun(key,arr,key.length,arr.length,dp)
        if(dp[arr.length][arr.length]!==undefined){
            console.log(dp[arr.length][arr.length])
        }else{
            console.log(1);
        }
    }
    function fun(st1,st2,l1,l2,dp) {
        for (let i = 0; i <=l1; i++) {
            for (let j = 0; j <= l2; j++) {
                if (i==0 || j==0) {
                    dp[i][j]=0
                }
            else if (st1[i-1]===st2[j-1]) {
                    dp[i][j]= dp[i-1][j-1]+1
                }
                else{
                    dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1])
                }
            }   
        }    
    }
        if (process.env.USERNAME === 'Rohan') {
            runProgram(`abcde
            abde`);
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



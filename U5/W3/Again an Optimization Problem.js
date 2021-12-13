function runProgram(input) {
    input =input.trim().split("\n")
    let S=input[1].trim().split(" ").map(Number)
    let arr=[]
   let value =[]
   let weight =[]
    for (let i = 2; i < input.length; i++) {
       let len= input[i].trim().split(" ").map(Number)
        input[i].trim().split(" ").map(Number)
        arr.push(len)
        value.push(len[1])
        weight.push(len[0])
    }
 
    for (let k = 0; k <weight.length-1; k++) {
        for (let l = 0; l <weight.length-k-1; l++) {            
            if(value[l]<value[l+1]){
                let temp =weight[l]
                weight[l]=weight[l+1]
                weight[l+1]=temp
                let temp2 =value[l]
                value[l]=value[l+1]
                value[l+1]=temp2
            }
        }
    }

    let dp = new Array(arr.length + 1);
    for ( let i = 0; i <= arr.length; i++)
    {
        dp[i] = new Array(arr.length + 1);
    }
    for(var i = 0; i < dp.length; i++){
        for(var j = 0; j < S[0]+ 1; j++){
            dp[i][j] = -1
            }}
    // console.log(fun(weight,value,S[0],arr.length,dp))
    console.log(fun(S[0],weight,value,arr.length,dp));
    // console.log(dp);
}
// function fun(weight,value,key,n,dp) {
//     for (let i = 0; i <=n; i++) {
//       for (let j = 0; j <=key; j++) {
//         if(i == 0 || j==0){
//             dp[i][j]=0
//         }
//         else if(weight[i-1]<=key)
//         {
//             dp[i][j]=Math.max(value[i-1]+dp[i-1][j-weight[i-1]],dp[i-1][j])
//         }
//         else{
//             dp[i][j]=dp[i-1][j]
//         }
//       }
//     }
//     return dp[n][key]
// console.log(dp);
// }
function fun(key,weight,value,n,dp)
{
    if(n==0 || key==0){
        return 0
    }
    if(dp[n][key]!==-1){
        return dp[n][key]
    }
    if(weight[n-1]>key){  
        return dp[n][key]=fun(key,weight,value,n-1,dp)
    }
    else{
        return dp[n][key]=Math.max((value[n-1]+fun(key-weight[n-1],weight,value,n-1,dp)),fun(key,weight,value,n-1,dp)
        )
    }
}

   
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`1
        2000 20
        1384 86
        778 115
        1794 135
        1387 92
        650 21
        363 27
        691 59
        1764 126
        541 26
        1173 136
        1212 168
        568 29
        1783 130
        863 123
        68 135
        1930 2
        23 58
        1070 167
        1394 56
        1012 42`);
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

   
function runProgram(input) {
    input =input.trim().split("\n")
    
    let arr= input[1].trim().split(" ").map(Number)
    let k= input[2].trim().split(" ").map(Number)
    

// let right=arr.length
//     if(check(arr,right,k)){
//         console.log("yes");
//     }else{
//         console.log("no");
//     }

    let sum=0
    let cur=0
    solve(arr,k,sum,cur)
    if(flag){
                console.log("yes");
            }else{
                console.log("no");
            }
}

function check(arr,right,k){
        if (k == 0)
            {return true;}
        if (right == 0)
           { return false;}
        if (arr[right-1]>k){return check(arr, right - 1, k);}
        return (check(arr, right - 1, k) || check(arr, right - 1, k - arr[right - 1]));
}

let flag = false 
function solve(arr,k,sum,cur){
    
    if (sum == k){
      flag = true;
      return
    }
    if (cur == arr.length){
      return 
    }
    for (let i = cur;i<arr.length;i++){
      solve(arr,k,sum,i+1); 
      solve(arr,k,sum+arr[i],i+1); 
    }
  }
  
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`9
        1 2 3 4 5 6 7 8 9
        5`);
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
function runProgram(input) {
    input=input.trim().split("\n")
    let key= input[0].trim().split(" ").map(Number)
    let arr= input[1].trim().split(" ").map(Number)
    console.log(fun(arr,0,arr.length-1,key[1]));
    }
    function fun(ar,s,e,key) {
        let ans=-1
      while(s<=e){   
            let mid=Math.floor(s+(e-s)/2)
            if(ar[mid]==key){
                ans=mid
                e=mid-1
            }
           else if(ar[mid]>key){
             e=mid-1
            }else{
            s=mid+1
            }
        }
        return ans
      }
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`10 7
        0 2 4 4 5 5 7 7 9 10`);
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
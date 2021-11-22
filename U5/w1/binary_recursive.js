function runProgram(input) {
    input=input.trim().split("\n")
    let key= input[0].trim().split(" ").map(Number)
    let arr= input[1].trim().split(" ").map(Number)
    console.log(fun(arr,0,arr.length-1,key[1]));
    }
    function fun(ar,s,e,key) {
        if(s<=e){
            let mid=Math.floor(s+(e-s)/2)
            if(ar[mid]==key){
                return 1
            }
            if(ar[mid]>key){
                fun(ar,s,mid-1,key)
            }else{
                fun(ar,mid+1,e,key)
            }
        }
        return -1
      }
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`5 0
        2 -2 0 3 4`);
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
function runProgram(input) {
    input=input.trim().split("\n")
    let key= input[2].trim().split(" ").map(Number)
    let arr= input[1].trim().split(" ").map(Number)
    console.log(fun(arr,0,arr.length-1,key[0]));
    }
    function fun(ar,s,e,key) {  
        if(s<=e){
            let mid=s+Math.floor((e-s) / 2)
            // console.log('mid:', mid)
            if(ar[mid]===key){
                return mid
            }
            if(ar[mid]>key){
                return fun(ar,s,mid-1,key)
            }else{
                return fun(ar,mid+1,e,key)
            }
        }
        return -1
    }
    
    
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`5
        1 2 4 5 6
        6`);
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
function runProgram(input) {
    input=input.trim().split("\n")
    let arr= input[1].trim().split(" ").map(Number)
    
   
        
        console.log(fun(arr,0,arr.length-1));
    }
    function fun(ar,s,e) {
        if (e < s)
        {return ar[0];}
        if (e == s)
        {return ar[s];}
       
          let mid=Math.floor(s+(e-s)/2)
        //   console.log('mid:', mid)
        if(mid<e && ar[mid+1]<ar[mid])   {
            return ar[mid+1]
        }
        if(mid>s && ar[mid-1]>ar[mid]){
            return ar[mid]
        }
        if(ar[e]>ar[mid]){
            return fun(ar,s,mid-1)
        }
        return fun(ar,mid+1,e)
    
    }
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`1
        3 2 4 15`);
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
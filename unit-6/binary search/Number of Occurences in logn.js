function runProgram(input) {
    input=input.trim().split("\n")
    let key= input[0].trim().split(" ").map(Number)
    let arr= input[1].trim().split(" ").map(Number)
    fun(arr,0,arr.length-1,key[1])
    console.log(count);
    }
    let count=0
    function fun(ar,s,e,key) {  
        // console.log('ar,s,e,key:', ar,s,e,key)
        if(s<=e){
            
            let mid=s+Math.floor((e-s) / 2)
            // console.log('mid:', mid)
            if(ar[mid]===key){
                while(ar[mid]===key){
                    // console.log(ar[mid]);
                    mid--
                }
                mid++
                while(ar[mid]===key){
                    mid++
                    count++
                }
            return
            }
            if(ar[mid]>key){
                return fun(ar,s,mid-1,key)
            }else{
                return fun(ar,mid+1,e,key)
            }
        }
        return 
    }
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`6 3 
        2 3 3 3 6 9`);
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
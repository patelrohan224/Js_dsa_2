    function runProgram(input) {
        input=input.trim().split("\n")
    for (let i = 2; i <input.length; i=i+2) {
        let arr=input[i].trim().split(" ").map(Number)
        console.log(fun(arr,0,arr.length-1));   
    }
        }
        function fun(ar,s,e,key) {  
            let mid=s+Math.floor((e-s) / 2)
            if(s<=e){
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
        
        // pending
        if (process.env.USERNAME === 'Rohan') {
            runProgram(`2
            3
            10 20 11
            5
            1 3 6 5 4`);
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
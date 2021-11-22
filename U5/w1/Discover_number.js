function runProgram(input) {
    input=input.trim().split("\n")
    let arr= input[1].trim().split(" ").map(Number).sort((a,b)=>{return a-b})
    for (let i = 2; i < input.length; i++) {
        let key= input[i].trim().split(" ").map(Number)
        console.log(fun(arr,0,arr.length-1,key[0]));
    }
    }
    function fun(ar,s,e,key) {
        if(s<=e){
            let mid=Math.floor(s+(e-s)/2)
            if(ar[mid]==key){
                return "YES"
            }
            if(ar[mid]>key){
               return  fun(ar,s,mid-1,key)
            }else{
                return fun(ar,mid+1,e,key)
            }
        }
        return "NO"
      }
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`5 10
        50 40 30 20 10
        10
        20
        30
        40
        50
        60
        70
        80
        90
        100`);
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
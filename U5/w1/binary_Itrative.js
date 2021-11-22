function runProgram(input) {
    input=input.trim().split("\n")
    let key= input[0].trim().split(" ").map(Number)
    let arr= input[1].trim().split(" ").map(Number)
    console.log(fun(arr,0,arr.length-1,key[1]));
    }
    function fun(ar,s,e,key) {

           while(s<=e){
                let mid=Math.floor(s+(e-s)/2)
                if(ar[mid]==key){
                    return mid
                }
                if(ar[mid]<key){
                    s=mid+1
                }else{
                    e=mid-1
                }
            }
            return -1
      }
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`6 5
        11 34 5 4 21 0`);
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
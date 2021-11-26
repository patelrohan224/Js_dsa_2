function runProgram(input) {
    input=input.trim().split("\n")
    let key= input[2].trim().split(" ").map(Number)
    let arr= input[1].trim().split(" ").map(Number)
    fun(arr,0,arr.length-1,key[0])
    console.log(l,h,rs);
    }
    let rs=0
   
    function fun(ar,s,e,key) {
        let ans=-1
        let l
        let h
      while(s<=e){   
            let mid=Math.floor(s+(e-s)/2)
            if(ar[mid]==key){
             
                l=mid--
               while(ar[mid]==key){
                   rs++
                mid++
                h=mid-1
               }
               return 
            }
           else if(ar[mid]>key){
             e=mid-1
            }else{
            s=mid+1
            }
        }
        return 
      }
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`6
        1 1 1 2 2 2	
        1`);
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
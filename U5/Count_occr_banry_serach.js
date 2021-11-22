function runProgram(input) {
    input=input.trim().split("\n")
    let key= input[0].trim().split(" ").map(Number)
    let arr= input[1].trim().split(" ").map(Number)
    lower_bound(arr,0,arr.length-1,key[1])
    console.log(rs);
  }
  let rs=0
    function lower_bound(ar,s,e,key) {
      while (s<=e) {
        let mid=Math.floor(s+(e-s)/2)
        if(ar[mid]==key){
        while (ar[mid]==key){
        mid--
        }
        mid=mid+1
        while(ar[mid]==key){
          rs++
          mid++
        }
        return 
        }
       else if(ar[mid]>key){
          e=mid-1
            }
            else{
                s=mid+1
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
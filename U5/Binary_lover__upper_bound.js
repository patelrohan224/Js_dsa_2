function runProgram(input) {
    input=input.trim().split("\n")
    let key= input[0].trim().split(" ").map(Number)
    let arr= input[1].trim().split(" ").map(Number)
    let rs=0
    console.log(lower_bound(arr,0,arr.length-1,key[1],rs));
    }
      function lower_bound(ar,s,e,key) {
        while (s<=e) {
          let mid=Math.floor(s+(e-s)/2)
          if(ar[mid]==key){
            while (ar[mid]==key){
              mid--
            }
            return mid+1
          }
        else if(ar[mid]>key){
            e=mid-1
              }
              else{
                  s=mid+1
              }
        }
        return -1
      }
    
    function upper_bound(ar,s,e,key) {
        if(s>e){
            return s
          }
          let mid=Math.floor(s+(e-s)/2)
          if(ar[mid]<=key){
              return upper_bound(ar,mid+1,e,key) 
          }
          return upper_bound(ar,s,mid-1,key) 
        }

        function upper_bound(ar,s,e,key) {
        while(s<=e) {
            let mid=Math.floor(s+(e-s)/2)
           
            if(ar[mid]>=key){
              e=mid-1
                }
                else{
                    s=mid+1
                }
          }
          if(s<ar.length && ar[mid]<=key){
            s++
          }
          console.log(s);
          return 
        }

    if (process.env.USERNAME === 'Rohan') {
        runProgram(`5 2
        1 1 2 2 5`);
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
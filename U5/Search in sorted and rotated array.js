function runProgram(input) {
    input=input.trim().split("\n")
    let arr= input[1].trim().split(" ").map(Number)
    
   
    let key= input[0].trim().split(" ").map(Number)
       
        let rs=pivot(arr,0,arr.length-1)
        
        if(rs==-1){
        return  console.log(binaryserach(arr,0,arr.length-1,rs[1]))
        }
        if(arr[rs]==key[1]){
            console.log(rs);
        }
        if(arr[0]<=key[1]){
            return console.log((binaryserach(arr,0,rs-1,key[1])))
        }
        return console.log(binaryserach(arr,rs+1,arr.length-1,key[1]))
    }
    function binaryserach(ar,s,e,key){
        if(s<=e){
            // let mid=Math.floor((s+e)/2)
            let mid=Math.floor(s+(e-s)/2)   
            if(ar[mid]==key){
                return mid
            }
            if(ar[mid]>key){
            return    binaryserach(ar,s,mid-1,key)
            }
            else{
            return  binaryserach(ar,mid+1,e,key)}
        }
        return -1
    }
    function pivot(ar,s,e) {
        if (e < s)
        {return -1}
        if (e == s)
        {return s}
       
          let mid=Math.floor(s+(e-s)/2)
        //   console.log('mid:', mid)
        if(mid<e && ar[mid+1]<ar[mid])   {
            return mid
        }
        if(mid>s && ar[mid-1]>ar[mid]){
            return mid-1
        }
        if(ar[s]>=ar[mid]){
            return pivot(ar,s,mid-1)
        }
        return pivot(ar,mid+1,e)
    
    }
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`15 14
        10 11 12 13 14 15 -1 0 1 2 3 4 5 7 8`);
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
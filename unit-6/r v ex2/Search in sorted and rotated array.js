function runProgram(input) {
    input=input.trim().split('\n')
      let array=input[1].trim().split(" ").map(Number)
      let [len,key]=input[0].split(" ").map(Number)
      let x=fun(array,key,0,array.length-1)
    
      let o=binarySearch(array,key,0,x-1)
      let b=binarySearch(array,key,x,array.length-1)
    //   console.log(x,o,b);
    if(o=="-1" && b=="-1"){
        console.log("-1");
    }else if(o=="-1"){
        console.log(b);
    }else if(b=="-1"){
        console.log(o);
    }
  }
  
  function fun(array,key,l,h){
    while(l<=h){
        let mid=Math.floor(l+(h-l)/2)
        if(array[mid]>array[mid+1]){
            return mid+1
        }else if(array[mid]<array[mid-1]){
            return mid
        }else if(array[l]<=array[mid]){
            l=mid+1
        }else if(array[h]>=array[mid]){
            h=mid-1
        }
    }
    return -1
  }
  function binarySearch(array,key,l,h){
    while(l<=h){
        let mid=Math.floor(l+(h-l)/2)
        if(array[mid]==key){
            return mid
        }else if(array[mid]<key){
            l=mid+1
        }else{
            h=mid-1
        }
    }
    return -1
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
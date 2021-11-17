function runProgram(input) {
    input=input.trim().split("\n")    
      let len=input[1].trim().split(" ").map(Number)    
      let l=len.length
      bubble(len,l)
      console.log(len.join(" "));
    }
function bubble(arr,l){
    if(l==1){
      return arr;
    }
    for(let j = 0; j < l-1; j++){
      if(arr[j] > arr[j + 1]){
        var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
      }
    }
     bubble(arr,l-1);
  }
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`2
        10 3`);
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
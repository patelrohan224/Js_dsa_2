function runProgram(input) {
    input=input.trim().split('\n')
    for (let i =1; i <input.length; i=i+4) {
        let array=input[i+1].trim().split(" ").map(Number)
        let array2=input[i+3].trim().split(" ").map(Number)
        console.log(fun(array,array2));
    }

  }
  
  function fun(array,array2) {
    let l=0
    let h=0
    let rs=[]
    while (l<array.length && h<array2.length) {
        if(array[l]==array2[h]){
          rs.push(array[l]);
          l++;
          h++ 
        }
        else if(array[l]<array2[h]){
          l++
        }else{
          h++
        }
    }
    return rs.length!=0 ? rs.join(" "): "-1"
  }

    if (process.env.USERNAME === 'Rohan') {
        runProgram(`2
        6
        2 2 3 3 9 9
        8
        2 2 2 4 5 5 8 8`);
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
function runProgram(input) {
    input=input.trim().split(" ").map(Number)
fun(input)  
    
}
function fun(array){
    array.sort()
let rs
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            for (let k = 0; k < array.length; k++) {
                  rs=array[i]*array[j]+array[k]
            }
            
        }
        
    }
    let count=0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            for (let k = 0; k < array.length; k++) {
                  if(array[i]*array[j]+array[k]===rs){
                    count++
                  }
            }
            
        }
        
    }
    console.log(count);
}
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`3 5 7 10`);
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
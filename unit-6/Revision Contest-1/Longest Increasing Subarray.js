function runProgram(input) {
    input=input.trim().split("\n")

    for (let i = 2; i < input.length; i=i+2) {
       var str=input[i].trim().split(" ").map(Number)
       fun(str)

    }
}
function fun(array) {
    let len=0
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
                let ar=[]

            for (let k = i; k <=j; k++) {
                ar.push(array[k])
            }
            let flag=true
            for (let l = 0; l < ar.length-1; l++) {
                if(ar[l]<ar[l+1]){
                }else{
                    flag=false
                }
            }
            if(flag){
                if(ar.length>len){
                    len=ar.length
                }
            }
        }
        
    }
    console.log(len);
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`2
    2
    1 1
    6
    1 2 1 2 3 1
    `);
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


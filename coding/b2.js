
function runProgram(input) {
    input=input.trim().split("\n")
    let str=input[1].trim().split(" ").map(Number).sort((a,b)=>{return a-b})
    let rs=[]
    for (let i = 3; i < input.length; i++) {
        let n=input[i].trim().split(" ").map(Number)
        rs.push(fun(str,n[0],n[1]))
    }
    console.log(rs.join(" "));
    }
    
    function fun(str,a,b) {
        let count=0
    for (let i = 0; i < str.length; i++) {
        if(str[i]>=a && str[i]<=b) count++
        
    }
    return count
    }
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`5
        10 1 10 3 4
        4
        1 10
        2 9
        3 4
        2 2`);
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
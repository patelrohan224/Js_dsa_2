function runProgram(input) {
    input =input.trim().split("\n")
    
    for(let i=1;i<input.length;i++){
        let l1=input[i].trim().split(" ").map(Number)
        console.log(fun(l1[0],l1[1]))
    }
}
function fun(l,h){
    console.log('l%h:',l,h,"",l%h)
    if(l==0 || h==0){
        return l
    }
    return fun(h,l%h)
}


    if (process.env.USERNAME === 'Rohan') {
        runProgram(`10
        7 3
        4 9
        9 4
        9 3
        10 2
        3 5
        8 2
        9 1
        10 8
        2 10`);
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
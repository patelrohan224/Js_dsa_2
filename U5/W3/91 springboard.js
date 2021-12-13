function runProgram(input) {
    input =input.trim().split("\n")
    let t=+input[0]
    let line=1
    for (let i = 0; i < t; i++) {
        let ar=[]
        let [r,c]=input[line++].trim().split(" ").map(Number)
        for (let j = 0; j <r; j++) {
        ar.push(input[line++].trim().split(" ").map(Number))
        }
        fun(ar)
    }
}
function fun(ar) {
    for (let i = 1; i < ar.length; i++) {
        for (let j = 0; j < ar[i].length; j++) {
            let a=0,c=0
            if(ar[i-1][j-1])  a=ar[i-1][j-1]
            let b=ar[i-1][j]
            if(ar[i-1][j+1])  c=ar[i-1][j+1]
            
            let temp=Math.max(a,b,c)
            ar[i][j]+=temp
        }
    }
    let min=ar[ar.length-1][0]
    for (let k = 0; k < ar[0].length; k++) {
        if(ar[ar.length-1][k]>min){
            min=ar[ar.length-1][k]
        }
    }
    console.log(min);
}
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`3
        4 6
        10 10 2 0 20 4
        1 0 0 30 2 5
        0 10 4 0 2 0
        1 0 2 20 0 4
        4 5
        12 44 8 1 2
        1 4 5 2 3
        2 5 8 7 6
        2 5 8 9 6
        6 5
        3 1 7 4 2
        2 1 3 1 1
        1 2 2 1 8
        2 2 1 5 3
        2 1 4 4 4
        5 2 7 5 1
        Expected O`);
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

   
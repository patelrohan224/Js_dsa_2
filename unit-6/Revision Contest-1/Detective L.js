function runProgram(input) {
    input=input.trim().split("\n")
    let line=Number(input[0])    
    let c=1
    for (let i = 0; i <line; i++) {
        let len=input[c].trim().split(" ").map(Number)
        c++
        let rs=[]
        for (let j = 0; j < len[0]; j++) {
            let ar=input[c].trim().split(" ").map(Number)
            rs.push(ar)
            c++
        }
        fun(rs,len[0],len[1])
    }
}
function fun(arr,ii,jj) {
    var m=ii
    var n=jj
    var i, left = 0,top = 0;
    
    var ar=[]
    while () {
        for (i =top; i < m; i++) {
           ar.push(arr[i][left])
        }
        left++;
        for (i = left; i < n; i++) {
           
            ar.push(arr[m-1][i])
        }
        m--;

    }
   console.log(ar.join(" "));
    }

if (process.env.USERNAME === 'Rohan') {
    runProgram(`2
    3 3
    1 2 3
    4 5 6
    7 8 9
    4 3
    1 2 3
    4 5 6
    7 8 9
    10 11 12
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


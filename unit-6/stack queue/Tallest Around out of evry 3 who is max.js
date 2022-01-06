function runProgram(input) {
    input=input.trim().split("\n")
    for (let i = 1; i < input.length; i=i+2) {
    let key=input[i].trim().split(" ").map(Number)
    let arr=input[i+1].trim().split(" ").map(Number)
    fun(arr,key[1])
        
    }
}
function fun(array,key) {
    let rs=[]
    for (let i = 0; i <=array.length-key; i++) {
        let min=array[i]
        for (let j = i; j <i+key; j++) {
            if(min<array[j]){
                min=array[j]
            }
        }
        rs.push(min)
    }
    console.log(rs.join(" "));
}

if (process.env.USERNAME === 'Rohan') {
    runProgram(`1
    9 3
    1 2 3 1 4 5 2 3 6`);
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


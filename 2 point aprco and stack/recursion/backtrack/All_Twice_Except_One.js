function runProgram(input) {
let ar=input.split("\n")
let testca=ar[0].trim()
for (let i = 1; i <testca*2+1; i=i+2) {
    let length=ar[i].trim()
    let data=ar[i+1].trim().split(" ").map(Number)
    let obj={}
    for (let j = 0; j < length; j++) {
        if(obj[data[j]]!==undefined) {
            obj[data[j]]+=1
        }
        else{
            obj[data[j]]=1
        }
    }
    for (keys in obj) {
        if(obj[keys]==1) {
            console.log(keys);
        }
    }
}
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`2
    1
    5
    5
    1 2 1 3 2`);
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
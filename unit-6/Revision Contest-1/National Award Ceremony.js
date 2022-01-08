function runProgram(input) {
    input=input.trim().split("\n")

    for (let i = 2; i < input.length; i=i+2) {
       var str=input[i].trim().split(" ").map(Number)
       fun(str)

    }
}
function fun(array) {
    let zero=0
    let one=0
    for (let i = 0; i < array.length; i++) {
        if(array[i]=="0"){
            zero++
        }
       else if(array[i]=="1"){
            one++
        }    
    }
    for (let i = 0; i <zero; i++) {
        array[i]="0"
    }
    for (let i =zero; i <one+zero; i++) {
        array[i]="1"        
    }
    for (let i = one+zero; i < array.length; i++) {
        array[i]="2"
    }
    console.log(array.join(" "));
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`3
    1
    2
    3
    2 0 1
    4
    2 0 2 1
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


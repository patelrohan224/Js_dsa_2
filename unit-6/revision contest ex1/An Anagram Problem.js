function runProgram(input) {
    input =input.split("\n")
    let obj={}
    for(let i=1;i<input.length;i++){
        let str=input[i].trim().split("").sort()
        // console.log('str:', str)
        if(obj[str]==undefined){
            obj[str]=input[i].trim()
        }
    }
    let ar=Object.values(obj).sort()
    console.log( ar.length)
    for (let i = 0; i < ar.length; i++) {
        console.log(ar[i]);
    }
}


    if (process.env.USERNAME === 'Rohan') {
        runProgram(`5
        eodc
        odec
        code
        baca
        aabc`);
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
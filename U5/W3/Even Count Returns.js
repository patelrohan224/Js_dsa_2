function runProgram(input) {
    input =input.trim().split("")
    // console.log('input:', input)
    let obj=[]
    for (let i = 0; i < input.length; i++) {   
        let c=0   
         for (let j = i; j < input.length; j++) {
            if(input[j]%2==0){
                c++
            } 
        }
        obj.push(c)
    }
    
    console.log(obj.join(" "));

}
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`574674546476`);
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

   
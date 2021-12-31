function runProgram(input) {
    input =input.trim().split("\n")
    let len=input[1].trim().split(" ").map(Number)
    fun(len)
}
function fun(array){

    let c=0
    for(let i = 0; i < array.length; i++) {
        for (let j = i+1; j <array.length; j++) {
            if(array[j]<array[i]){
                // console.log('array[j]:',array[i], array[j])
                c++
            }
        }
    }
    console.log(c);
}

  
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`4
        8 4 2 1`);
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
function runProgram(input) {
    input =input.trim().split("\n")
    let len=input[1].trim().split(" ").map(Number)
    fun(len)
}
function fun(array){

    let min
    for (let i = 0; i < array.length-1; i++) {
        min=i
        for (let j = i+1; j <array.length; j++) {
            if(array[j] < array[min]){
                min=j
            }
            // console.log('array[j]:', array[min])
        }
            let temp = array[min]
            array[min] = array[i]
            array[i] = temp
            // console.log(array);
    }
    console.log(array.join(" "));
}

  
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`34
       64 25 12 22 11`);
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
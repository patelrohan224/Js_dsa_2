function runProgram(input) {
    input =input.trim().split("\n")
    let len=input[1].trim().split(" ").map(Number)
    fun(len)
}
function fun(array){
    let swap
    for (let i = 0; i < array.length-1; i++) {
        swap=false
        for (let j = 0; j < array.length-i-1; j++) {
            if(array[j+1]<array[j]){
                let temp=array[j]
                array[j]=array[j+1]
                array[j+1]=temp
                swap=true
            }
        }
        if(swap==false){
            break
        }
    }
    console.log(array.join(" "));
    // for (let i = 0; i < array.length-1; i++) {
    //     if(array[i]>array[i+1])
    //     {
    //         temp=array[i]
    //         array[i]=array[i+1]
    //         array[i+1]=temp
    //     }
    // }
    //  console.log(array.join(" "));
}

  
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`1 
        2 10 4 5 6`);
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
function runProgram(input) {
    input =input.trim().split("\n")
    input = input[1].trim().split(" ")   
    let rs=""
    fun(input[0],rs)
}
function fun(str,ans) {
    if(str.length===0){
        console.log('ans:', ans)
        return
    }
    fun(str.substring(1),ans)
    fun(str.substring(1),ans+str.charAt(0))
}
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`4
        abcd`);
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
function runProgram(input) {
    input =input.trim().split("\n")
    
    for(let i=1;i<input.length;i++){
        let l1=input[i].trim().split(" ").map(Number)
        console.log(fun(l1[0],l1[1]))
    }
}
function fun(l,h){
    if(l<h){
        return "Not Possible"
    }
    if(l==h){
        return "Possible"
    }

}


    if (process.env.USERNAME === 'Rohan') {
        runProgram(`4
        6 242
        3 3
        6 3
        10 30`);
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
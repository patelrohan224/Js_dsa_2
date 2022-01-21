function runProgram(input) {
    input =input.trim().split("\n")
    
    for(let i=2;i<input.length;i=i+2){
        let l1=input[i].trim().split(" ").map(Number)

        fun(l1)

    }
}

    function fun(array) {
        let InfinitySum=-Number.MAX_VALUE
        let sum=0
        let one=0
        let zero=0
        let c=0
        for (let i = 0; i < array.length; i++) {

            if(array[i]==1){
                one++
                c++
            }
            else{
                zero++
                c++
            }

            sum+=array[i]
            if(one==zero){
                if(c>InfinitySum){
                    InfinitySum=c
                }
              
            }
            if(c<0){
                c=0
            }
           
        }
        console.log(InfinitySum);
    }




    if (process.env.USERNAME === 'Rohan') {
        runProgram(`1
        5
        1 0 0 1 0`);
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
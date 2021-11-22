function runProgram(input) {
    input=input.trim().split("\n")
    for (let i = 1; i < input.length; i++) {
        
        let arr= input[i].trim().split(" ").map(Number)
        let a= arr[0],b=arr[1],c=arr[2],k=arr[3]
    
        // fun(a,b,c,k)
        console.log( fun(a,b,c,k))
    }
   
}

function fun(a,b,c,k){
    let rs=Number.MAX_VALUE

    if(k<=c){
        return -1
    }

    let e=k-c
    let s=0

    while(s<=e){ 
         let m = Math.floor((s + e) / 2);
        if((a*m*m+(b*m)>(k-c))){
            rs=Math.min(rs,m)
            e=m-1
        }
        else if((a*m*m+(b*m)<(k-c)))
        {
            s=m+1
        }else{
            return m-1
        }
    }
    return rs
}
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`1
        3 2 4 15`);
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
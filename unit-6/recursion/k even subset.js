function runProgram(input) {
    input= input.trim().split("\n")
    for (let i = 2; i < input.length; i=i+2) {
        let len= input[i].trim().split(' ').map(Number)
        let key= input[i-1].trim().split(' ').map(Number)
        // console.log('len:', len,key[1])
        let rs=[]
        fun(0,len,rs,key[1])
        console.log(count);
        count=0
        rs=[]
    }
    }
    let count =0
    function fun(s,arr,rs,key)
    {
        if(rs.length==0){
    
        }
        if(rs.length>0){
            let od=0
                for (let i = 0; i < rs.length; i++) {
                    if(rs[i]%2==0){
                        od++
                    }
                }
                if(od>=key){
                   count++
                }
        }
        if(s==arr.length){
            return
        }
        for (let i = s; i < arr.length; i++) {
            rs.push(arr[i])
            fun(i+1,arr,rs,key)
            rs.pop()
        }
    }
    
    
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`2
        4 2
        4 3 2 1
        2 1
        2 3`);
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
    
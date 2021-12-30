function runProgram(input) {
    input =input.trim().split("\n")
    let t = +input[0]
    let line=1;
    for(let i=0;i<t;i++){
        let qq=input[line++].trim().split(" ").map(Number)
        // console.log(qq);
        let q = +qq[1]
        // console.log('q:', q)
        let array = input[line++].trim().split(" ")
        // console.log('array:', array)
        let rs=[]
        for(let j=0; j<q;j++){
            let str = input[line++].trim().split(" ").join(" ")
            rs.push(str)
        }
        let s=0
      console.log( fun(rs,array[0],s)?"Yes":"No")
    }   
}
function fun(rs,array,s) {
    let set=new Set(rs)
    if(s==array.length){
        return true
    }
    for (let i = s+1; i <=array.length; i++) {
        // console.log('array.substring(s,i):', s,i,array.substring(s,i))
        if(set.has(array.substring(s,i)) && fun(rs,array,i) ) {
                return true
            }
    }
    return false
}
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`2
        5 4
        masai
        as
        mas
        ai
        asai
        4 2
        hack
        hac
        ack
        `);
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



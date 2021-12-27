function runProgram(input) {
    let string=input.trim().toString()
    // console.log('string:', string)
    fun(string)
}

function fun(str) {

    let c=0
    let rs=""
    for (let i = 0; i < str.length; i++) {

        if(str.charAt(i)===str.charAt(i+1)){
            c++
        }      
        else{
            c++
            let next=str.slice(i+1,str.length)
            let prev=str.slice(0,i+1)
            // console.log('next:', next,prev,c)
            rs+=str.charAt(i)+c
            // console.log('rs:', rs)
            c=0
        }  
    }
    console.log(rs);

}

    if (process.env.USERNAME ==='Rohan') {
      runProgram(`aaabbbbccaa`);
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
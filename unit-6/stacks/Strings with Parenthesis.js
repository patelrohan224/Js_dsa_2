function runProgram(input) {
    input=input.trim().split("")
    console.log(fun(input))
}
function fun(input) {
    
    let array = []
    for (let i = 0; i < input.length; i++) {
        if(input[i]=="(" || input[i]=="[" ||input[i]=="{" )
      {array.push(input[i])}
        if(array.length==0){
            return "unbalanced"
        }
        let temp
        switch (input[i]) {
                case ")":
                     temp=array.pop()
                    if(temp=="[" || temp=="{"){
                        return "unbalanced"
                    }
                     break;
                case "]":
                     temp=array.pop()
                    if(temp=="(" || temp=="{"){
                        return "unbalanced"
                    }
                    break;  
                case "}":
                     temp=array.pop()
                    if(temp=="(" || temp=="["){
                        return "unbalanced"
                    }
                    break;             
        }
    }
    return (array.length==0) ?"balanced" : "unbalanced"
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`(((((((((())))))))))`);
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


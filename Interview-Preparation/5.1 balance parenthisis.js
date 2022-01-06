
function runProgram(input) {
    var arr=input.split("\n")
    for (let i =1; i < arr.length; i++) {
        let array=arr[i].trim().split("")
        console.log(fun(array)?"balanced":"not balanced");
    }
}
function fun(array) {

    let rs=[]
    for (let i = 0; i < array.length; i++) {
        if(array[i]=="{" || array[i]=="[" || array[i]=="("){
            rs.push(array[i])
        }
        if(rs.length===0){
            return false
        }
        let temp
        switch(array[i]){
            case "]":
            temp=rs.pop()
            if(temp=="{" || temp=="("){
                return false
            }
            break;  

            case "}":
            temp=rs.pop()
            if(temp=="[" || temp=="("){
                return false
            }
            break;

            case ")":
            temp=rs.pop()
            if(temp=="{" || temp=="["){
                return false
            }
            break;
        }
    }
    return rs.length==0

}
 
     if (process.env.USERNAME ==='Rohan') {
       runProgram(`3
       {([])}
       ()
       ([]`);
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

function runProgram(input) {
    var arr=input.split("\n")
    for (let i =1; i < arr.length; i++) {
        let array=arr[i].trim().split(" ")
        if(array.length>1){
            pushF(Number(array[1]))
        }
        else if(array[0]==="MIN"){
            if(ar.length===0){
                console.log("EMPTY");
            }else{
                console.log(c);
            }
        }else{
            if(ar.length===0){
                console.log("EMPTY");}
            popF()
        }
        
    }
}
let ar=[]
let c
function pushF(x){
    if(ar.length==0){
        ar.push(x)
        c=x
    }else{

        if(x<c){
            ar.push(x-c)
            c=x
        }
        else{
            ar.push(x)
        }
    }
}
function popF(){
    if(ar[ar.length-1]<c){
        c=c-ar[ar.length-1]
    }
    return ar.pop()
}
 
     if (process.env.USERNAME ==='Rohan') {
       runProgram(`26
       PUSH 100
       PUSH 50
       MIN
       PUSH 45
       MIN
       POP
       MIN
       POP
       MIN
       PUSH 20
       PUSH 19
       PUSH 21
       PUSH 21
       MIN
       POP
       MIN
       POP
       MIN
       POP
       MIN
       POP
       MIN
       POP
       POP
       POP
       MIN`);
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
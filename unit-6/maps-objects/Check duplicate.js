function runProgram(input) {
    input=input.trim().split("\n");
   // console.log('input:', input)
   for (let i = 2; i < input.length; i=i+2) {
       let string=input[i].trim().split(" ").map(Number)
    console.log( fun(string))
   }

}
function fun(string) {
    let obj={}
    for (let i = 0; i < string.length; i++) {
        if(obj[string[i]]==undefined) 
        {obj[string[i]]=1}
        else{
            obj[string[i]]=obj[string[i]]+1
        }
    }
    let ar=[]
    for (const key in obj) {
        if (obj.hasOwnProperty.call(obj, key)) {
           if(obj[key]%2==0){
            return "YES"
           }
        }
    }
    return "NO"
}

   if (process.env.USERNAME ==='Rohan') {
     runProgram(`3
     1
     1
     2
     1 1
     3
     1 2 3`);
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
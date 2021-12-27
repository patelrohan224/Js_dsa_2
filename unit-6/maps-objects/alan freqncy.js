function runProgram(input) {
    input=input.trim().split("\n");
   // console.log('input:', input)
   let string=input[1].trim().split("")
//    console.log('string:', string)
   fun(string)
   
   
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
            ar.push(key+"-"+obj[key]);
        }
    }
    console.log(ar.sort().join("\n"));
}

   if (process.env.USERNAME ==='Rohan') {
     runProgram(`4
     gfcgqxfxkujvrkjvxeirrsvqdjcejjybwjnexvnmldrfeehotsfvnawqzmztknyywomssgdmllek`);
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
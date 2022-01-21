function runProgram(input) {
    input=input.trim().split("")
    fun(input)
}

function fun(array){
    let object={}
    for (let index = 0; index < array.length; index++) {
        if(object[array[index]]==undefined) {
            object[array[index]]=1
        }else{
            object[array[index]]=object[array[index]]+1
        }
    }
    // console.log(object);
    let ar=[]
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            if(object[key]%2!==0){
                ar.push(key)    
            }
        }
    }
    console.log(ar.join(""));
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`aaabccddd`);
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


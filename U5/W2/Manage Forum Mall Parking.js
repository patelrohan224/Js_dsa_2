
function runProgram(input) {
    input=input.trim().split("\n")
    let key= input[0].trim().split(" ").map(Number)
    
    
    let arr= input[1].trim().split(" ").map(Number)
    let arr2= input[2].trim().split(" ").map(Number)
    // fun(arr,arr2)
    console.log(fun(arr,arr2,key[0]))
   
    
}

function fun(arr,arr2,key){
    let ar=[]
    // console.log('arr,arr2:', arr,arr2)
    for (let i = 0; i < arr.length; i++) {

            ar.push(arr[i])
            ar.push(arr2[i])
    }
    // console.log(ar);
    let rs=0
    for (let i = 0; i < ar.length-1; i++) {   
        if(ar[i]<=ar[i+1]){
        // console.log('ar[i]<ar[i+1]:', ar[i]<ar[i+1])
        }else{
            rs++
            if(rs==key){
            return "Not Possible"}
        }
        
    }
    return "Possible"
}

    if (process.env.USERNAME === 'Rohan') {
        runProgram(`4
        4 3 6 7 11
        9 4 10 9 14`);
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
function runProgram(input) {
    input =input.trim().split("\n")
    let key=input[0].trim().split(" ").map(Number)
    let arr=input[2].trim().split(" ").map(Number)
    let arr2=input[3].trim().split(" ").map(Number)
    let obj=new Array(arr.length)
    for (let i = 0; i < arr.length; i++) {
        obj[i]=new Array(arr[i],arr2[i])
    }
    let min=obj[0]
    
   
    obj.sort((a,b)=>{return b[0]/b[1]-a[0]/a[1]})
    
    // console.log(obj);
    fun(obj,key[0])
}
function fun(obj,keyy){
    let weight=0
    let result=0
 for (let i = 0; i <obj.length; i++) {
        if(+obj[i][1]<=keyy){
            keyy-=obj[i][1]
            result+=obj[i][0]
        }else{       
            result+=Math.round(obj[i][0]*(keyy/obj[i][1]))
            break
        }      
   }
    console.log((result));
}
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`50
        20
        60 100 120
        10 20 30`);
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
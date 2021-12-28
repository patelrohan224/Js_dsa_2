function runProgram(input) {
    input=input.trim().split("\n")
    
    let arr=input[1].trim().split(" ").map(Number)
    // console.log("a",arr);
    fun3(arr)
    let y=fun4(arr)
    // console.log('y:', y)
    let x=fun3(arr)
    // console.log('x:', x)
    let rs=[]
    for (let i = 0; i < x.length; i++) {
        rs.push(Number(x[i])+Number(y[i]))
    }
    console.log(rs.join(" "));
    
}
function fun4(array) {
    let rs=[]
    let ar=[]
        for (let i = array.length-1; i >=0; i--) {
        while (ar.length!==0 && array[i]>=ar[ar.length-1]){
        ar.pop()        
        }
        if(ar.length==0){
            rs.push("-1")
        }else{
            rs.push(array.indexOf(ar[ar.length - 1])+1)
        }
        ar.push(array[i])
        }
        // console.log(array);
        // console.log('rs:', rs.join(" "))
        rs=rs.reverse()
       return rs
}
function fun3(array) {
    let rs=[]
    let ar=[]
        for (let i =0; i <array.length; i++) {
        while (ar.length!==0 && array[i]>=ar[ar.length-1]){
        ar.pop()        
        }
        if(ar.length==0){
            rs.push("-1")
        }else{
            rs.push(array.indexOf(ar[ar.length - 1])+1)
        }
        ar.push(array[i])
        }
    //     console.log(array);
    //  console.log('rs:', rs.join(" "))
     return rs
}
// function fun3(array) {
//     let rs=new Array(array.length).fill(-1)
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i+1; j < array.length; j++) {
//             if(array[i]<array[j])
//             {
//             rs[i]=j+1
//             break
//             }
//     }
// }
// return rs
// }
// function fun4(array) {
//     let rs=new Array(array.length).fill(-1)
//     for (let i = array.length-1; i >=0; i--) {
//         for (let j = i-1; j >=0; j--) {
//             if(array[i]<array[j])
//             {
//                 rs[i]=j+1
//                 break
//             }
//         }
//     }
//     return rs
// }

if (process.env.USERNAME === 'Rohan') {
    runProgram(`10
    1 2 3 4 5 6 2 9 7 8`);
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


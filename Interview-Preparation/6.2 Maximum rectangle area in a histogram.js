
function runProgram(input) {
    var arr=input.split("\n")
    for (let i =2; i < arr.length; i=i+2) {
        let array=arr[i].trim().split(" ").map(Number)
        // fun(array,array.length)
        // console.log("-");
       let one= nseright(array,array.length)
        let second=nseleft(array,array.length)
        let length=0
        let max_area=0
        let area
        for (let i = 0; i < array.length; i++) {
            length=second[i]-one[i]-1
            area=length*array[i]
            if(max_area<area){
                max_area=area
            }
        }
        console.log(max_area);
    }
}
function nseright(array,n) {
    let rs=new Array(n)
    rs[n-1]=n
    for (let i = array.length-2; i >= 0; i--){
        let temp=-1
        for (let j = i+1; j>n; j++) {
            if(array[i]>array[j]){
                temp=array[j]
            }
        }
        rs[i]=temp
    }
    console.log(rs);
    return rs
}
function nseleft(array,n) {
    let rs=new Array(n)
    rs[0]=array[0]
    for (let i=1; i<array.length; i++){
        let temp=-1
        for (let j=i+1; j<array.length; j++) {
            if(array[i]>array[j]){
                temp=array[j]
            }
        }
        rs[i]=temp
    }
    console.log(rs);
    return rs
}

     if (process.env.USERNAME ==='Rohan') {
       runProgram(`2
       5
       2 3 4 5
       3
       7 5 4 3 6 8`);
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

     // function fun(array,n){
//     let left,right
//     let maxa=0
//     let a
//     for (let i = 1; i < n-1; i++) {
//         left=array[i]
//         for (let j = 0; j<i; j++) {    
//             left=Math.min(left,array[j])
//         }
//         right=array[i]
//         for (let j = i+1; j<n; j++) {    
//             right=Math.min(right,array[j])
//         }
//         console.log(array[i],left,right);
//     }
//     // for (let i = 0; i <1; i++) {
//     //     for (let j = 0; j<n; j++) {    
//     //         if()
//     // }
// }
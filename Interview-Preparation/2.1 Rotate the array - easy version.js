
function runProgram(input) {
    var arr=input.split("\n")
    for (let i =1; i < arr.length; i=i+2) {
        let key=arr[i].trim().split(" ").map(Number)
        let array=arr[i+1].trim().split(" ").map(Number)
      fun(array,key[1])
    }
}
function fun(array,n) {
    n=n%array.length
    let i=array.length-n
    let j=array.length-1
    while (i<j) {
        let temp=array[i]
        array[i]=array[j]
        array[j]=temp
        i++
        j--
    }
    i=0
    j=array.length-n-1
    while (i<j) {
        let temp=array[i]
        array[i]=array[j]
        array[j]=temp
        i++
        j--
    }
    i=0
    j=array.length-1
    while (i<j) {
        let temp=array[i]
        array[i]=array[j]
        array[j]=temp
        i++
        j--
    }
    console.log(array.join(" "));

}

     if (process.env.USERNAME ==='Rohan') {
       runProgram(`3
       3 1
       1 2 3
       2 2
       1 2
       2 3
       1 2`);
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


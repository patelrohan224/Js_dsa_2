function runProgram(input) {
    input=input.trim().split("\n")
    let ar=[]
    let l=input[0].trim().split(" ").map(Number)
    let arr=input[1].trim().split(" ").map(Number)
    fun(arr,arr.length,l[1])

} 
function fun(arr, n, k)
 
{
    for(let i = 0; i < k; i++){  
        let j, first;  
        first = arr[0];  
        for( j = 0; j < n-1; j++){  
            arr[j] = arr[j+1];  
        }  
        arr[j] = first;  
    } 
    console.log(arr.join(" "));
}
  
    if (process.env.USERNAME ==='Rohan') {
      runProgram(`6 4
      1 2 5 4 0 6`);
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
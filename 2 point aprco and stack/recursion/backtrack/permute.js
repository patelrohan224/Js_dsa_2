function runProgram(input) {
  input =input.trim().split("\n")
  input = input[1].trim().split(" ")
  input =input.join("")
  let rs=""
  fun(input,rs)   
}
function fun(a,rs){
  if(a.length==0 )
  {
      console.log(rs.split("").join(" "));
      return 
  }
  for (let i = 0; i <a.length ; i++){
    let c=a[i]
    let l=a.substring(0,i)
    let r=a.substring(i+1)
    let ss=l+r
    fun(ss,rs+c)
  }
}
if (process.env.USERNAME === 'Rohan') {
        runProgram(`3
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
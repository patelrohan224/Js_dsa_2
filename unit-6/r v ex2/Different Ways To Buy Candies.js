function runProgram(input) {
    input=input.trim().split('\n')
    let [len,key]=input[0].trim().split(" ").map(Number)
    let rs=input[1].trim().split(" ").map(Number)
    fun(0,rs,[],0,key)  
    if(flag==false){
      console.log("-1");
    }
}
let flag= false
  function fun(i,array,rs,sum,key){
    if(sum===key){

      flag=true
      console.log(rs.join(" "));
    }
    if(sum+array[i]<=key){
      sum+=array[i]
      rs.push(array[i])
      fun(i,array,rs,sum,key)
      sum-=array[i]
      rs.pop()
      fun(i+1,array,rs,sum,key)
    }
    else{
      return
    }
  }
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`3 8
        2 3 5`);
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
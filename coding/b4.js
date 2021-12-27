function runProgram(input) {
    input =input.trim().split("\n")
    let kee = Number(input[0])
    
    let ss=""
    for (let i = 1; i <=kee; i++) {
            ss+=i
    }
    ss=ss.split(" ")
    let len=input[1].trim().split(" ").map(Number)
    // console.log(len)
    let rs=""
 
    fun(ss[0],rs,len[0],len[1])  
    console.log(count); 
  }
  let count=0
  function fun(a,rs,q,w){
    if(a.length==0 )
    {
        let sum=0
        for (let i = q; i <=w; i++) {
            sum+=Number(rs[i])
            
        }
        // console.log();
    if(sum%2!=0)
    {
        count++
    }
        // console.log(rs.split("").join(" "));

        return 
    }
    for (let i = 0; i <a.length ; i++){
    let c=a[i]
    let l=a.substring(0,i)
    let r=a.substring(i+1)
    let ss=l+r
    fun(ss,rs+c,q,w)
    }
  }
  if (process.env.USERNAME === 'Rohan') {
          runProgram(`3
          0 1`);
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
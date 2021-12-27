function runProgram(input) {
    input=input.trim().split("\n")
    let string=input[1].trim().split("")
    console.log( fun(string))
}
function fun(str) {
        for (let i = 0; i < str.length; i++) {
            if(str[i]===str[str.length-i-1]){
                // console.log('str[i]:', str[i])
                // console.log('str[str.length-i]:', str[str.length-i])
                
            }else{
                return "No"
            }
        }
        return "Yes"
}
// function fun(str) {
//     let obj={}
//     for (let i = 0; i < str.length; i++) {
//         if(obj[str[i]]===undefined) {
//             obj[str[i]]=1
//         }else{
//             obj[str[i]]=obj[str[i]]+1
//         }
//     }
//     let t=0
//  for(key in obj) {
//      if(obj[key]%2==0){
//     }else{
//         t++
//      }
//  }
//  if(t>1){
//      return "No"
//  }else{
//      return "Yes"
//  }
// }

    if (process.env.USERNAME ==='Rohan') {
      runProgram(`6
      ama`);
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
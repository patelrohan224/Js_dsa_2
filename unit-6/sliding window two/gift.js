function runProgram(input) {
    input=input.trim().split("\n")
    for (let i = 2; i <input.length; i=i+2) {
        let array=input[i].trim().split(" ").map(Number)
        let rs=[]
        fun(array,0,0)
    }
}
// O(n^2)     

// function fun(array,l,r) {
//  if(r===array.length){
//      return
//  }else if(l>r){
//     fun(array,0,r+1)
//  }
//  else{
//      let rs=[]
//      for (let i = l; i <=r; i++) {
//         rs.push(array[i]);
//     }
//     console.log(rs);
//     fun(array,l+1,r)
// }
//     return
// }

function fun(array) {
  let temp
   for (let i = 0; i < array.length; i++) {
      
   }
}




if (process.env.USERNAME === 'Rohan') {
    runProgram(`3
    8
    1 2 1 3 2 7 4 2
    5
    1 2 1 3 4
    4
    1 2 2 1`);
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


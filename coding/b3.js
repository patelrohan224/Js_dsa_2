

function runProgram(input) {
input=input.trim().split('\n')
let le=Number(input[0])

for (let i = 1; i < input.length; i++) {
    let len=input[i].trim().split(" ").toString()

    console.log(fun(len,le))
}
}

function fun(lenn,le) {
    let len = lenn.length;
    lenn = lenn.split("");
     
    lenn = lenn.sort();
    let i = 0;
    while (lenn[i] == '0')
        {i++;}

    let tmp = lenn[0];
    lenn[0] = lenn[i];
    lenn[i] = tmp;
    lenn=lenn.join("");
    
  if(le!=8){
            let rs=lenn.toString()
            if(rs[0]=="-"){
                let ar=[]
                for (let i = 1; i < rs.length; i++) {
                    ar.push(rs[i])
                }
                lenn=ar.reverse().join("")
                lenn="-"+lenn
            }  
          }
    return lenn;
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`2
    53334121
    -1002911`);
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
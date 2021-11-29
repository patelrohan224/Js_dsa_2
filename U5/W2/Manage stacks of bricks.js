function runProgram(input) {
    input=input.trim().split("\n")
    let len = input[1].trim().split(" ").map(Number)
    
    for (let i = 1; i < input.length; i=i+(3+len[0])) {
        let inn=input[i+1].trim().split(" ").map(Number)
        let out=input[i+2].trim().split(" ").map(Number)
        
        let a=[]
        let b=[]
        for (let k = i+3; k <i+len[0]+3; k++) {
          let ar=input[k].trim().split(" ").map(Number)
            a.push(ar[0])
            b.push(ar[1])
        }
        console.log(fun(a,b,inn,out,len[0]));
    }
  }
  function fun(a,b,inn,out,len){
    a.sort((a,b)=>{return a-b})
    b.sort((a,b)=>{return a-b})
    let minicost=0
    for (let i = 0; i <len ; i++) {
    if(a[i]>b[i]){
      minicost+=(a[i]-b[i])*out
    }else{
      minicost+=(b[i]-a[i])*inn
    }
    }
    return minicost
  }

    if (process.env.USERNAME === 'Rohan') {
        runProgram(`60
        10
        7
        23
        1740 9488
        2455 1711
        5276 1423
        2216 8576
        1892 7954
        3123 3411
        3874 2779
        3198 6502
        8602 4865
        9006 1389
        10
        7
        23
        3446 6618
        4963 7882
        9135 9840
        7636 1542
        9737 2601
        6575 4120
        1460 7177
        7733 5998
        1826 6038
        1250 9478`);
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


function runProgram(input) {
    input=input.trim().split('\n')
    let le=Number(input[0])
    for (let i = 2; i < input.length; i=i+2) {
        // console.log('i:', i)
        let len=input[i].trim().split(" ").join("").toString()
        // console.log('len:', len)
        console.log(fun(len,le))
    }
    }
    
    function fun(arr,l) {
        let len = arr.length;
        arr = arr.split("");
         
        arr = arr.sort();
        let i = 0;
        while (arr[i] == '0')
            {
                i++;
            }

        let tmp = arr[0];
        arr[0] = arr[i];
        arr[i] = tmp;
        arr=arr.join("");
        
      if(l!=8){
                let temp=arr.toString()
                
                if(temp[0]=="-"){
                    let ar=[]
                    for (let i = 1; i < temp.length; i++) {
                        ar.push(temp[i])
                    }
                    arr=ar.join("")
                    arr="-"+arr
                }  
              }
        return arr;
    }
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`3
        4
        2 1 0 0
        4
        1 4 2 3
        4
        5 2 3 2`);
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
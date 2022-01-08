  function runProgram(input) {
      input=input.trim().split("\n")

      for (let i = 2; i < input.length; i=i+2) {
        var str=input[i].trim().split(" ").map(Number)       
        fun(str)
      }
  }
  function fun(array) {
    let vk=0
    let ab=0
    let c=false
    for (let i = 0; i < array.length; i++) {
      if(c){
        vk+=array[i]
      }else{
        ab+=array[i]
      }

      if((i+1)%6==0){
        c=!c
      }
      if(array[i]===1 || array[i]===3){
        c=!c
      }
      
    }
    if(ab!=vk){
      console.log((ab>vk)?"AB de Villiers":"Virat Kohli");
    }else{
      console.log("Tie");
    }
  }
  if (process.env.USERNAME === 'Rohan') {
      runProgram(`3
      2
      1 2 0 0 1 1 6 6 4 1 6 1
      3
      0 0 0 0 0 1 0 0 0 0 1 1 6 6 6 1 4 4
      1
      0 1 0 1 0 0`);
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


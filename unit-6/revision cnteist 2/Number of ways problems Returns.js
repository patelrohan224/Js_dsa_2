function runProgram(input) {
    input=Number(input);    
    console.log( fun(input,0))
}

function fun(n,c){
    let array=new Array(n+2);
    array[0]=1
    array[1]=1
    array[2]=2

    for (let i =3; i <=n; i++) {
        array[i]=array[i-3]+array[i-2]+array[i-1]
    }
return array[n]
}
if (process.env.USERNAME === 'Rohan') {
    runProgram(`4`);
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


    function runProgram(input) {
      let arr = input.split("\n");
      let [l, ar] = arr[0].trim().split(" ").map(Number);
      array = ar[1].trim().split(" ").map(Number);
      console.log(min(array));
  }
  
  function min(nums) {
          let l = 0
          let h = nums.length - 1
          while (l < h) {
              let mid = l + Math.floor((h - l) / 2)
              if (nums[mid] > nums[h]){
                  l=mid+1
              }
              else{
                  h = mid
              }
          }
          return nums[l]
      };
  if (process.env.USERNAME === "Rohan") {
      runProgram(`10
      4 6 7 9 10 -1 0 1 2 3`);
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
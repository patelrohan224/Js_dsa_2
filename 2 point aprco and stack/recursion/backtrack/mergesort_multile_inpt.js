function runProgram(input) {
    input =input.trim().split("\n")
    let len=input[1].trim().split(" ").map(Number)
    let len2=input[2].trim().split(" ").map(Number)
   
    merge_sort(len,len2)

}
function merge_sort(len, len2) {
    let arr = [];
    let l1 = 0
    let l2 = 0
    while (l1 < len.length && l2 < len2.length) {
      if (len[l1] < len2[l2]) {
        arr.push(len[l1]);
        l1++;
      } else {
        arr.push(len2[l2]);
        l2++;
      }
    }

    while (l1 < len.length) {
      arr.push(len[l1]);
      l1++;
    }
    while (l2 < len2.length) {
      arr.push(len2[l2]);
      l2++;
    }

    return console.log(arr.join(" "));
  }

  
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`4
        1 5 7 9
        2 4 6 8`);
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
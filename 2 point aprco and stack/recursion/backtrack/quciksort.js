function runProgram(input) {
    input =input.trim().split("\n")
    let len=input[1].trim().split(" ").map(Number)
    let l=0
    let h=len.length-1
  
    console.log(quiksort(len,l,h).join(" "))
}

function quiksort(arr,l,h){
if(l<h){
    let mid=midindex(arr,l,h)
 quiksort(arr,l,mid-1)
 quiksort(arr,mid+1,h)
}
return arr;
}
function midindex(arr,l,h){
    let q=l,w=h
    let t=arr[h]
    while(q<w){
        while(arr[w]>=t && w>0){
            w--
        }
        while(arr[q]<t && q<h){
            q++
        }
        if(q<w){
            let temp=arr[q]
            arr[q] = arr[w]
            arr[w] = temp
        }
    }
    let temp=arr[q]
    arr[q] = arr[h]
    arr[h] = temp
    return q;
}

    if (process.env.USERNAME === 'Rohan') {
        runProgram(`5
        3 5 0 9 8`);
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
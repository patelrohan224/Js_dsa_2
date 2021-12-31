function runProgram(input) {
    input =input.trim().split("\n")
    let len=input[1].trim().split(" ").map(Number)
    let high=len.length-1
    let low=0
    merge_sort(low,high,len)
    console.log(len.join(" "));
}
function merge_sort(low,high,arr){
    if(low<high){
        let mid=Math.floor((low+high)/2)
        merge_sort(low,mid,arr)
        merge_sort(mid+1,high,arr)
        merge(low,mid,high,arr)
    }else{
        return
    }
}
function merge(l, m, r, arr)
{
    let n1 = m - l + 1;
    let n2 = r - m;

    let L = new Array(n1); 
    let R = new Array(n2);

    for (let i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (let j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
    let i = 0;
    let j = 0;
    let k = l;
  
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}
  
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`1 
        2 10 4 5 6`);
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
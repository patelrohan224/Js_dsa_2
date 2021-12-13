function runProgram(input) {
    input =input.trim().split("\n")
    let arr=input[1].trim().split(" ").map(Number)
    let key=input[2].trim().split(" ").map(Number)
   rs=[]
//    fun(arr,rs,0,key[0]) 
   fun(arr,rs,0,key[0]) 
   console.log(flagg);
}
let flagg="no"
function fun(a,rs,l,key) {

    if(rs.length>0){
        rs=rs.map(Number)        
            // console.log('rs:', rs)
            let sum=0
            for (let i = 0; i < rs.length; i++) {
                sum+=rs[i]
            }
           if(sum===key){
            flagg="yes"
               return "YES"
           }
        //    console.log(rs.join(" "));
        }
    if (l==a.length){
    return ;}
    for (let i = l; i <a.length; i++) {
        rs.push(a[i])
        fun(a,rs,i+1,key);
        rs.pop();
    }
    return 
}
    if (process.env.USERNAME === 'Rohan') {
        runProgram(`9
        1 2 3 4 5 6 7 8 9
        1`);
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

    // const getAllSubsets = 
    //   theArray => theArray.reduce(
    //     (subsets, value) => subsets.concat(
    //      subsets.map(set => [value,...set])
    //     ),
    //     [[]]
    //   );

    // console.log(getAllSubsets(arr));
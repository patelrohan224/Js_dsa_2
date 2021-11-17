function runProgram(input) {
  input=input.trim().split(' ').map(Number)
  let st=[]
  for (let i = 1; i <=input[0];i++) {
  st.push(i)
  }
  
let rs=[]
let l=0 
  parute(st,rs,l,input[1])     
}

let set=new Set()
function parute(arr,rs,l,k){
  if(rs.length>0){
      
      if(rs.length>=k){
          let sr=[]
  for (let i = 0; i < k; i++) {
      sr.push(rs[i])
  }
  
      if(set.size==0){
          set.add(sr.join(" "))
          console.log(sr.join(" "));
      }
      if(set.has(sr.join(" "))){
      }else{
         set.add(sr.join(" "))
         console.log(sr.join(" "));}}
  }
 if(l==arr.length){
     return 
 }
 for (let i = l; i < arr.length; i++) {
  rs.push(arr[i]);
  parute(arr,rs,i+1,k)
rs.pop()     
 }
 return 
}
  if (process.env.USERNAME === 'Rohan') {
      runProgram(`20 3`);
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
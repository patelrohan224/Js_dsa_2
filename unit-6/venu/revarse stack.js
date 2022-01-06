let ar=[1,2,3]


// n(n^2)
// space complexity is max depth of recursion tree
// o(n)
function revarSe(){
    if(ar.length>0){
      let  x=ar[ar.length-1]
        ar.pop()
        revarSe()
        insert(x)
    }
}
function insert(x){
    if(ar.length==0){
        ar.push(x)
    }
    else{
        let a=ar[ar.length-1]
        ar.pop()
        insert(x)
        ar.push(a)
    }
}
revarSe()
console.log(ar)
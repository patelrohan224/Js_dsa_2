let ar=[]

let current
function add(x){
    if(ar.length===0){
        ar.push(x)
         current=x
    }
    else{
        if(x<current){
            ar.push(x-current)
            current=x
        }else{
            ar.push(x)
        }
    }
}

function deleTe(){
    if(ar[ar.length-1]<current){
        current=current-ar[ar.length-1]
    }
    return ar.pop()
}

add(10)
add(5)
add(2)
add(6)
// console.log(ar)
deleTe()
deleTe()
console.log(current)
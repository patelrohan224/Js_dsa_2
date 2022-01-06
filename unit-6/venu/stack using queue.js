let q1=new Array()
let q2=new Array()
function push(x){
    q2.push(x)    
    while(q1.length!=0){
        q2.push(q1.shift())
        q1.shift()
    }
    let temp=q1
    q1=q2
    q2=temp
}

function pop()
{
    return q1.shift()
}

function top()
{
    return q1[q1.length-1]
}

push(1)
push(2)
push(4)
console.log(top())
console.log(q1)
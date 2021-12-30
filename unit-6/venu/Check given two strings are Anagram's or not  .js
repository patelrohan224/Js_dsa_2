let ar="listen"
let ar2="silent"

// o(nlogn)
// o(N)
// fun(ar,ar2)
function fun(array,array2) {
    
    array=array.split("").sort().join("")
    array2=array2.split("").sort().join("")
    console.log((array==array2)?"YES":"NO");
}

// Approach-2 [Count Array of size 256]
fun2(ar,ar2)
function fun2(array,array2) {
    let ar=new Array(256)
    for (let i = 0; i < array.length; i++) {
    }
}

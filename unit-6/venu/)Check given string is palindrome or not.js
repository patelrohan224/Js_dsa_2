let ar="samamas"
op="gfedcba"


// o(n)
// o(1)
fun(ar)
function fun(array){
    for (let i = 0; i <Math.floor(array.length/2); i++) {
        if(array.charAt(i)!=array.charAt(array.length-i-1))
        {console.log("not");
        return}
    }
    console.log("yes");
}




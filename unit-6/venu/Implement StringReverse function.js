let ar="abcdefg"
op="gfedcba"


// o(n)
// o(n)
// fun(ar)
function fun(array){
    array=array.split("")
    for (let i = 0; i <array.length/2; i++) {
        let temp=array[i]
        array[i]=array[array.length-i-1]
        array[array.length-i-1]=temp
    }
    console.log(array.join(''));
}




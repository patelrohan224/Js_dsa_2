let ar="aavsde"

// o(n)
// o(n)
fun(ar)
function fun(array) {
    let set=new Set(array.split(""))
    for (let i = 0; i < array.length; i++) {
        if(set.has(array[i]))
        {

        }else{
            set.add(array[i])
        }
    }
    array=Array.from(set)
    console.log('array:', array.join(''))
}
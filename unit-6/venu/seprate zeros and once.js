let ar=[1,1,0,1,0,0,0,1]

// apr 1 sort array
// tm o(nlogn)
// sc o(n)

// count aproach
// tm o(n)
// sc o(1)
// fun(ar)

function fun(array) {
    let zero=0
    for (let i = 0; i < array.length; i++) {
        if(array[i]===0) {
            zero++
        }
    }
    for (let i = 0; i < zero; i++) {
        array[i]=0
    }
    for (let i = zero; i <array.length; i++) {
        array[i]=1        
    }
    console.log(array);
}

// 2 pointer aproach
// tm o(n)
// sc o(1)

fun2(ar)
function fun2(array){
    let l=0
    let r=array.length-1
    while (l<r){
    while(array[l]==0 && l<r){
        l++
    }
    while(array[r]==1 && l<r){
        r--
    }
    if(l<r){
        array[l]=0
        array[r]=1
        l++
        r--
    }
    }
    console.log(array);
}
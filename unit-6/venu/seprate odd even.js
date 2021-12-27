let ar=[12,34,45,9,8,90,3]
// ans [12,34,90,8,9,45,3] order not maintined
//  2 pointer
// tc o(n^2)
// sc o(1)
// fun(ar)
function fun(array){
    let l=0
    let r=array.length-1
    while(l<r){
        while(array[l]%2==0 && l<r){
            l++
        }
        while(array[r]%2!=0 && l<r){
            r--
        }
        if(l<r){
            let temp=array[l]
            array[l]=array[r]
            array[r]=temp
            l++
            r--
        }
    }
    console.log(array);
}


fun2(ar)
function fun2(array){
    for (let i = 0; i < array.length; i++) {
        
    }
}
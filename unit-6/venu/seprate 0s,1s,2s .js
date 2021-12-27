let ar=[0,1,1,0,1,2,1,2,0,0,0,1]

// apr 1 sort array
// tm o(nlogn)
// sc o(n)

// brute force
// o(n)
// o(1)
// fun(ar)
function fun(array){
    let zc=0
    let oc=0
    for (let i = 0; i < array.length; i++) {
        if(array[i]==0){
            zc++
        }else if(array[i]==1){
            oc++
        }
    }
    for (let i = 0; i < zc; i++) {
    array[i]=0
    }
    for (let i = zc; i < zc+oc; i++) {
    array[i]=1
    }
    for (let i = zc+oc; i < array.length; i++) {
    array[i]=2
    }
    console.log(array);
}


// dutch national flag algo
// o(n)
// o(1)
fun2(ar)
function fun2(array) {
    let l=0,mid=0
    let r=array.length-1
    while(mid<=r){
        switch(array[mid]){
            case 0:{
                let temp=array[l]
                array[l]=array[mid]
                array[mid]=temp
                l++
                mid++
                break;
            }
            case 1:{
                mid++
                break;
            }
            case 2:{
                let temp=array[mid]
                array[mid]=array[r]
                array[r]=temp
                r--
                break;
            }
        }
    }
    console.log(array);
}
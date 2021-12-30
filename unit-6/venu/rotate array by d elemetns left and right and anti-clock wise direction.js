let ar=[1,2,3,4,5,6]
let d=2


// anti clock wise
// o(n)
// o(d)
// fun(ar)
function fun(array){
    d=d%array.length
    let tempAr=new Array(d)
    for (let i = 0; i <d; i++) {
        tempAr[i] = array[i]
    }
    for (let i =0; i <array.length; i++) {
        array[i]=array[i+d]
    }
    let c=0
    for (let i = 0; i < array.length; i++) {
        if(array[i]==undefined){
            array[i]=tempAr[c]
            c++
        }
    }
    console.log(array);
}
//clock wise
// o(n)
// o(d)
// funClock(ar)
function funClock(array){
    d=d%array.length
    let tempAr=new Array(d)
    for (let i = d-1; i >=0; i--) {
        tempAr[i] = array[array.length-i-1]
    }
    for (let i=array.length-1; i >=0; i--) {
        array[i]=array[i-d]
    }
    for (let i = 0; i < array.length; i++) {
        if(array[i]==undefined){
            array[i]=tempAr[i]
        }
    }
    console.log(array);
}


// multiple subArray revarse
// o(n)
// o(1)
// fun2(ar)
function fun2(array) {
    let i=0
    let j=d-1
    while(i<j){
        let temp=array[i]
        array[i]=array[j]
        array[j]=temp
        i++
        j--
    }
    console.log(array);
     i=d
     j=array.length-1
    while(i<j){
        let temp=array[i]
        array[i]=array[j]
        array[j]=temp
        i++
        j--
    }
    i=0
    j=array.length-1
    while(i<j){
        let temp=array[i]
        array[i]=array[j]
        array[j]=temp
        i++
        j--
    }
    console.log(array);
}

// multiple subArray revarse clockwise
// o(n)
// o(1)
// fun2Clockwise(ar)
function fun2Clockwise(array) {
   
    let i=array.length-d
    let j=array.length-1
    while(i<j){
        let temp=array[i]
        array[i]=array[j]
        array[j]=temp
        i++
        j--
    }
   
     i=0
     j=array.length-d-1

    while(i<j){
        let temp=array[i]
        array[i]=array[j]
        array[j]=temp
        i++
        j--
    }
   ;
    i=0
    j=array.length-1
    while(i<j){
        let temp=array[i]
        array[i]=array[j]
        array[j]=temp
        i++
        j--
    }
    console.log(array);
}
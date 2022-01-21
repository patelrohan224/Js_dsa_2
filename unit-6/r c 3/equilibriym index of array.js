let ar=[-7,1,5,2,-4,3,0]
op=3

// o(n^2)
// o(1)

fun(ar)
function fun(array) {
    for (let i = 1; i < array.length-1; i++) {
        let sum1=0
        let sum2=0
        for (let j = 0; j < i; j++) {
            sum1+=array[j]
        }
        for (let j = i+1; j < array.length-1; j++) {
            sum2+=array[j]
        }
        if(sum1===sum2) {
            console.log(i);
            return 
        }
    }
    console.log("not found");
    return 
}


// Ap-2 [Taking 2 arrays]
// o(n)
// o(n)

fun2(ar) 
function fun2(array) {
    if(array.length===1) {return 0}
    let leftAr=[]
    let rightAr=[]
    let temp=0
    for (let i = 0; i < array.length; i++) {
        temp+=array[i]
        leftAr.push(temp)
    }
    temp=0
    for (let i = array.length-1; i >=0; i--) {
        temp+=array[i]
        rightAr.push(temp)
    }
    rightAr=rightAr.reverse()
    // console.log(leftAr);
    // console.log(rightAr);
    for (let i = 0; i < array.length; i++) {
        if(leftAr[i]==rightAr[i]){
            console.log(i);
            return
        }        
    }
}

// optimized
// o(n)
// o(1)

fun3(ar)
function fun3(array) {
    let sum=0
    let leftsum=0
    for (let i = 0; i < array.length; i++) {
        sum+=array[i]
    }
    for (let i = 0; i < array.length; i++) {
        sum-=array[i]
        if(leftsum==sum){
            console.log(i);
            return
        }
        leftsum+=array[i]
    }
    console.log("-1");
    return
}
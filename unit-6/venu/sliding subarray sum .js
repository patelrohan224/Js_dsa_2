let ar=[-2,-3,4,-1,-2,1,5,-3]

// total sun array=n(n+1)/2

// o(n^3)
// o(1)
// fun(ar)
function fun(array) {
    let InfinitySum=-Number.MAX_VALUE
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            let sum=0
            let ar=[]
            for (let k = i; k <=j; k++) {
                ar.push(array[k])
                sum+=array[k]
            }
            // console.log(sum,ar);
            if(sum>InfinitySum) {
                InfinitySum=sum
                // console.log(ar);
            }
        }
    }
    console.log(InfinitySum);
}


// kanade's algo
// o(n)
// o(1)
fun2(ar)
function fun2(array) {
    let InfinitySum=-Number.MAX_VALUE
    let sum=0
    for (let i = 0; i < array.length; i++) {
        sum+=array[i]
        if(sum>InfinitySum){
            InfinitySum=sum
        }
        if(sum<0){
            sum=0
        }
    }
    console.log(InfinitySum);
}
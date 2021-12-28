let ar=[10,3,5,6,2]
op=[ 180, 600, 360, 300, 900 ]

// taking two arrays
// n^2
// 1
// n algo sahani
fun(ar)
function fun(array) {
    let rsAr=new Array(array.length)
    for (let i = 0; i < array.length; i++) {
        let temp=1
        for (let j = 0; j < array.length; j++) {
            if(i!=j){
                temp*=Number(array[j])
                rsAr[i]=temp
            }
        }
    }
    console.log(rsAr);
}

// taking one array
// take one product array of size n
// n
// n
fun2(ar)
function fun2(array) {
    let Ar=new Array(array.length)
    let temp=1
    for (let i = 0; i < array.length; i++) {
        Ar[i]=temp
        temp=temp*array[i]
    }
    // console.log(Ar);
    temp=1
    for (let i = Ar.length-1; i >=0; i--) {
        Ar[i]=Ar[i]*temp
        // console.log('temp:', temp,array[i])
        temp=temp*array[i]
    }
    console.log(Ar);
}


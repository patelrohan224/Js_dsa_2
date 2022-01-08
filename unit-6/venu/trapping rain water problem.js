let ar=[1,0,2,0,1,0,3,1,0,2]

// brute force
// o(n^2)
// o(1)
// fun(ar)
function fun(array,n){
    let res=0
    for (let i = 1; i < n-1; i++) {
        
        let left=array[i]
        for (let j = 0; j <i; j++) {
            left=Math.max(left,array[j])
        }
        let right=array[i]
        for (let j = i+1; j <n; j++) {
            right=Math.max(right,array[j])
        }
        console.log(left,right);
        res+=Math.min(left,right)-array[i]
    }
    console.log(res);
}

// o(n)
// o(n)
// fun2(ar,10)
op=9 
// fun2(ar,7) 
op=6
function fun2(array,n){
   
    let first=new Array(n)
    let second=new Array(n)
    // console.log(n,first.length);
    let res=0
    first[0]=array[0]
    // console.log(first,second);
    for (let i = 1; i < n; i++) {
        first[i]=Math.max(first[i-1],array[i])
    }
    second[second.length-1]=array[n-1]
    for (let i = n-2; i >=0; i--) {
        second[i]=Math.max(second[i+1],array[i])
    }
    // console.log(first,second);
    for (let i = 0; i < n; i++) {
        res+=Math.min(first[i],second[i])-array[i] 
    }
    console.log(res);
}

// o(n)
// o(1)
// ar=[2,3,4,5]
fun3(ar,10)
function fun3(array,n) {
    let rs=0,left_max=0,right_max=0,l=0,h=n-1
    while(l<=h){
        if(array[l]<array[h]){
            if(array[l]>left_max){
                left_max=array[l]
            }else{
                rs+=left_max-array[l]
            }
            l++
        }else{
            if(array[h]>right_max){
                right_max=array[h]
            }else{
                rs+=right_max-array[h]
            }
            h--
        }
    }
    console.log(rs);
}
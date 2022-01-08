let n=625

// o(root(N))
let l=1
let h=n
console.log('fun(n,l,h):', fun(n,l,h))
function fun(n,l,h){
    let temp=-1
    while(l<=h){
        let mid=Math.floor(l+(h-l)/2)
        if((mid*mid)==n){
            return mid
        }
        if((mid*mid)<n){
            l=mid+1
            temp=mid
        }else{
            h=mid-1
        }
    }
    return temp
}
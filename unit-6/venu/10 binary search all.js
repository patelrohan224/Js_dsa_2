let ar=[1,1,2,2,2,2,2,2,4,5,6]
let target=2

// Find the first Occurance of target in the given array
// o(logn)
// fun(ar,0,ar.length-1,target)
function fun(array,l,h,key){
    let rs=-1
    while (l<=h) {
        let mid=Math.floor(l+(h-l)/2)
        if(array[mid]==key){
            rs=mid
            h=mid-1
        }
        else if(array[mid]>key){
            h=mid-1
        }else{
            l=mid+1
        }
    }
    console.log(rs);
    return rs
}


//Find the last Occurance of target in the given array
// fun2(ar,0,ar.length-1,target)
function fun2(array,l,h,key){
    let rs=-1
    while (l<=h) {
        let mid=Math.floor(l+(h-l)/2)
        if(array[mid]==key){
            rs=mid
            l=mid+1
        }
        else if(array[mid]>key){
            h=mid-1
        }else{
            l=mid+1
        }
    }
    console.log(rs);
    return rs
}

// lower bound upper bound and ocurance
// let l=fun(ar,0,ar.length-1,target)
// let h=fun2(ar,0,ar.length-1,target)
// let counT=0
    // counT=h-l+1
    // console.log('counT:', counT)



// lower bound upper bound and ocurance
// fun3(target,ar,0,ar.length-1)
function fun3(n,array,l,h) {
    let count=0
    let low
    let high
    if(l<=h){
        let mid=Math.floor(l+(h-l)/2)
        if(array[mid]==n){
            while (array[mid]==n) {
                mid--
            }
            if(mid==-1){
                low=0
            }else{
                low=mid+1
            }
            mid++
            while(array[mid]==n){
                mid++
                count++
            }
            high=mid-1
        console.log(low+" "+high+" "+count);
        return
        
        }
        if(array[mid]>n){
           return fun2(n,array,l,mid-1)
        }else{
           return fun2(n,array,mid+1,h)
        }
    }
    return "-1 -1 0"
}

// Find the floor and ceil of a element in a given array
ar=[1,2,8,10,10,12,19,31]
target=2.5
fun4(target,ar,0,ar.length-1)
function fun4(key,ar,l,h) {
    let ceil=-1
    let floor=-1
    while (l<=h) {
        let mid=Math.floor(l+(h-l)/2)
        if(ar[mid]==key){
            floor=mid
            ceil=mid
            break
        }
        else if(ar[mid]>key){
            ceil=mid
            console.log('ceil:', ceil)
            h=mid-1 
        }else{
            floor=mid
            l=mid+1
        }
    }
    console.log(floor,ceil);
}


// Search for an element in an infintely sorted array

// key 78
// low =0
// high=1
// while(key>arrar[high]){
    // low=high
    // high=2*high
// }
// after this we have low and hight then simply binary search 
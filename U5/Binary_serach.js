let ar=[1,2,3,4,6,11,34,54,67,89,100]
let key=54
console.log('fun(ar,0,ar.length,key):', fun(ar,0,ar.length,key))
console.log('fun(ar,0,ar.length,key)2:', fun2(ar,0,ar.length,key))



// recursive method
function fun(ar,s,e,key) {
    if(s<=e){
        // let mid=Math.floor((s+e)/2)
        let mid=s+Math.floor((e-s)/2)   
        if(ar[mid]==key){
            return mid
        }
        if(ar[mid]>key){
        return    fun(ar,s,mid-1,key)
        }
        else{
        return  fun(ar,mid+1,e,key)}
    }
    return -1
}

// itrative 
function fun2(ar,s,e,key) {
  while (s<=e) {
    // let mid=Math.floor((s+e)/2)
    let mid=s+Math.floor((e-s)/2)
    if(ar[mid]==key){
        return mid
    }
    if(ar[mid]>key){
      e=mid-1
        }
        else{
            s=mid+1
        }
  }
  return -1
}

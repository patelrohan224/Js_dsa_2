let ar=[12,3,4,1,6,9]
let sum=24
// fun(ar)

// brute force
// tc o(n^3)
// sc o(1)
function fun(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            for (let k = 0; k < array.length; k++) {
                if(array[i]+array[j]+array[k]===sum){
                    console.log('array[i]+array[j]+array[k]:', array[i],array[j],array[k])
                    return
                }
            }   
        }  
    }
    console.log("false");
    return 
}

// sorting 2 pointer
// nlogn+n^2
// tc o(n^2)
// sc o(1)

// fun2(ar)
function fun2(array){
    array=array.sort()
   
    let l
    let r
  for (let i = 0; i < array.length-2; i++) {
        l=i+1
        r=array.length-1
        while (l<r){
            if(array[i]+array[l]+array[r]===sum){
                console.log('array[i]+array[j]+array[k]:',array[i],array[l],array[r])
                return
            }
            else if(array[i]+array[l]+array[r]<sum){
                l++
            }
            else{
                r--
            }
        }
  }
  return false
}
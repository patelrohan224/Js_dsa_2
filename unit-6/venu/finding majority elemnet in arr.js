let ar=[3,3,4,2,4,4,2,4,4]
// fun(ar)
// brute force 
// tc o(n^2)
// sc o(1)
function fun(array) {
    let freqncy=0
    let freqElement
    for (let i = 0; i < array.length; i++) {
        let count=0
        for (let j = 0; j < array.length; j++) {
            if(array[i]==array[j]){
                count++
            }
        }
        if(count>freqncy) 
        {
            freqncy=count
            freqElement=array[i]

        }
    }
    if(freqncy > array.length/2){
        console.log(freqElement);
    }else{
        console.log("No majority elemnet");
    }
}

// sorting approch
// tc o(nlogn)
// sc o(1)

// fun2(ar)
function fun2(array) {
    array=array.sort()
    let index=-1
    for (let i = 0; i < Math.ceil(array.length/2); i++) {
        if(array[i]==array[i+Math.floor(array.length/2)]){
            index = i
            break
        }
    }
    console.log(index);
}

//object / Map
// tc o(n)
// sc o(n)

// fun3(ar)
function fun3(array) {
   let map=new Map()
   let c=1
   for (let i = 0; i < array.length; i++) {
       if(map.has(array[i])){
        map.set(array[i],(map.get(array[i]))+1)
       }else{
        map.set(array[i],c)
       }
   }

   let index
   let min=0
   for (let i = 0; i < array.length; i++) {
       if(map.get(array[i])>min){
           min=map.get(array[i])
           index=array[i]
       }
   }
   console.log(index);
}

// moore's voting algo
// tc o(n)
// sc o(1)

fun4(ar)
function fun4(array) {
    let min_index=0
    let count=1
    for (let i = 1; i < array.length; i++) {
        if(array[min_index]==array[i]){
            count++
        }else{
            count--
        }
        if(count==0){
            min_index=i
            count=1
        }
    }
    console.log(array[min_index]);
}
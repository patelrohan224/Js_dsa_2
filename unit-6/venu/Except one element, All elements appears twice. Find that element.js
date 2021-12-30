let ar=[7,3,9,5,4,5,3,4,7]
op=7

// o(n^2)
// o(1)
// fun(ar)
function fun(array){
    for (let i = 0; i < array.length; i++) {
        let c=0
        for (let j = 0; j < array.length; j++) {
            if(i!=j){
            if(array[i]===array[j]){
                c++
            }
            if(c==0){
                console.log(array[i]);
                return 
            }}
        }
    }
}

// sort
// n(nlogn)
// n(n)
// fun2(ar)
function fun2(array){
    array=array.sort()
    console.log(array);
    for (let i = 0; i < array.length; i=i+2) {
        if(array[i]!==array[i+1])
        {console.log(array[i]);}
    }
}


// map,object
// o(n)
// o(n)
// fun3(ar)
function fun3(array){
    let map=new Map()
    for (let i = 0; i < array.length; i++) {
        if(map.has(array[i]))
        {
            map.set(array[i], map.get(array[i])+1);
        }       else{
            map.set(array[i],1)
        }
    }
    for(const[key,value] of map.entries()){
        if(value%2!==0){
            console.log(key);
        }
    }
}


// using bit manupulation using ex-or
// o(n)
// o(1)
fun4(ar)
function fun4(array){
    let temp=array[0]
    for (let i = 1; i < array.length; i++) {
        temp=temp^array[i]
    }
    console.log(temp);
}
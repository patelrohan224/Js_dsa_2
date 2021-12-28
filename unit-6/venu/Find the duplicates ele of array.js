let ar=[1,2,3,6,3,6,1]
op=1,3,6

fun(ar)
// n^2
// 1
function fun(array) {
    let rs=[]
    for (let i = 0; i < array.length; i++) {
        let count=0
        for (let j = i+1; j < array.length; j++) {
                if (array[i]==array[j]) {
                    count++;
                }
        }        
        if(count>=1){
            rs.push(array[i])
        }
    }
    console.log(rs);
}

// object,Map
fun2(ar)
// n
// n
function fun2(array) {
    let map=new Map();
    let rs=[]
    for (let i = 0; i < array.length; i++) {
        if(map.has(array[i])){
            map.set(array[i],map.get(array[i])+1)
        }
        else{
            map.set(array[i],1)
        }
    }
    for(const [key,value] of map.entries()) {
        if(value>=2){
            rs.push(key)
        }
    }
    console.log(rs);
}

// object,Map
fun3(ar)
// n
// 1
function fun3(array) {
    console.log('array:', array)
    let rs=[]
    for (let i = 0; i < array.length; i++) {
        let j=Math.abs(array[i])
  
        if(array[j]>=0){
            console.log('array[j]:', array[j])
            array[j]=-array[j]
            console.log('array[j]:', array[j])
        }else{
            rs.push(j)
        }
    }
    console.log(rs);
}
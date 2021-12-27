let ar=[1,2,6,9,-5,-2]
// brute-force
// tc o(n^2)
// sc o(1)
// fun(ar)
function fun(array) {
        let min_sum=array[0]+array[1]
        let sum
        let l=0
        let r=0

        if(array.length<2){
            console.log("invalid");
            return
        }
        for (let i = 0; i < array.length-1; i++) {
            for (let j = i+1; j < array.length; j++) {
                sum=array[i]+array[j]
                if(Math.abs(min_sum)>Math.abs(sum)){
                    min_sum=sum
                    l=i
                    r=j
                }   
            }   
        }
        console.log(array[l],array[r]);
}

// sorting 2+pinter
// tc o(nlogn)
// sc o(1)

fun2(ar)
function fun2(array) {
      array=array.sort();
      let i=0;
      let j=array.length
      let sum
      let min_sum=Number.MAX_VALUE
      let l=i
      let r=j
      if(array.length<2){
        console.log("invalid");
        return
        }
      while (l<r) {
          sum=array[i]+array[j]
          if(Math.abs(min_sum)>Math.abs(sum)){
              min_sum=sum
            l=i
            r=j
          }
          if(sum<0){
              l++
          }else{
              r--
          }
      }
      console.log(array[l],array[r]);
}
let ar=[[10,20,30,40],
        [15,25,35,45],
        [27,29,37,48],
        [32,33,39,50]]
let x=29

// o(n+m)
// o(1)
fun(ar)
function fun(array) {
    let i=0
    let j=array.length-1
    while (i<array.length && j>=0) {
        if(array[i][j]===x){
            console.log("found",i,j,array[i][j]);
            return 
        }
        if(array[i][j]>x){
            j--
        }
        else{
            i++
        }
    }
        console.log("not found");
        return 
}
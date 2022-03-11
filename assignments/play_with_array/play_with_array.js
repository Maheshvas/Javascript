function getEven(arr) {
       let ans=[];
       for(let i=0;i<arr.length;i++){
           if(arr[i]%2===0){
               ans.push(arr[i]);
           }
       }
       return ans
    }

function multiplyByN(arr, n) {
    
   let prod=[];
   for(let i=0;i<arr.length;i++){
           let ans=arr[i]*n;
            prod.push(ans)
         }
           
    return prod;
 }

function removeNthElement(arr, n) {
    
   arr.splice(n,1)
   return arr
}

module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}
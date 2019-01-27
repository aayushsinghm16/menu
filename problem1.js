function getSum(arr,sum){
    arr.sort(function(a, b){return a - b})
    var first = 0,last = arr.length-1;
    for(var i = 0; i<arr.length;i++){
      var s = arr[first]+arr[last];
      console.log(s)
      if(s==sum){
        found = 1;
        return 'found';
        
      }else if(arr[first]+arr[last]>sum){
        last--;
      }else{
        first++;
      }
    }
    return 'not found'
}
console.log(getSum([1,3,1,5,6,2,7],20));

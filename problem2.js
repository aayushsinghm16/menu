var s = 'GEEKSFORGEEKS';
function subString(str){
  var len = str.length;
  var temp = new Set();
  var maxLen = 0;
  var sub = 0;
  for(i = 0; i<len;i++){
    if(temp.has(str.charAt(i))){
      sub = 1
      temp.clear();
      temp.add(str.charAt(i))
    }else{
      temp.add(str.charAt(i))
      sub++;
    }
    maxLen = Math.max(maxLen,sub);
  }
  console.log(maxLen)
  return maxLen
}
subString(s);

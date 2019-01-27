var s = 'GEEKSFOREGEKS';
// console.log(s.indexOf(s[0],1));
for(var i=0; i<s.length;i++){
  subString(s[i]);
  }

function subString(c){
  var start;
  for(var i=1; i<=s.length;i++){
    
    if(c == s[i+1]){
        start = s.substr(c,i+1)
        console.log(c+" "+start +" " + s[i+1] +""+ i);
        
    }
   
  }
  return ''
  
}

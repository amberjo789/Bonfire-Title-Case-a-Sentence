function titleCase(str) {
  var seperator = " ";
  var strArr = str.split(seperator);
  
  //will stop when i=9, last
  //index processed is strArr[8]
  for(var i=0;i<strArr.length;i++){
    var subStrArr = strArr[i].split('');
    var ch = strArr[i].charAt(0);
    if(ch != ch.toUpperCase()){
        ch = ch.toUpperCase();
        subStrArr[0] = ch;
    }
      for(var j=1;j<subStrArr.length;j++){
        var ch2 = strArr[i].charAt(j);
        if(ch2 == ch2.toUpperCase()){
        ch2 = ch2.toLowerCase();
        subStrArr[j] = ch2;
      }
    }
      strArr[i] = subStrArr.join('');
    }
  
  str = strArr.join(' ');
  return str;
}

titleCase("sHoRt AnD sToUt");
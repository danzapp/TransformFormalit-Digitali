function removeLastChar(strng, char){        
    var n=strng.lastIndexOf(char);
    var a=strng.substring(0,n) 
    return a;
}

function isLastChar(strng, char){        
    var n=strng.lastIndexOf(char);
    if (n>-1){
      return true
    }
    else return false;
}
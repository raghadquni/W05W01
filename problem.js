function isPalindrome(i)
  {
    let len = i.length -1; // leangth of i
    for( let j = 0 ; j < len/2 ;j++)
    {
      let x = i[j] ; //forward character
      let y = i[len-j]; //backward character
      if( x != y) //if forward not match backward.
      {
        return false;
      }
    }
    return true;
     
  }
     


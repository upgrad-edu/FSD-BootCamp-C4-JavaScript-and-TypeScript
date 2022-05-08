function isArmstrong(num:number):boolean{

  let numarray = num.toString();
 
           var pow = (Math.pow(parseInt(numarray[0]),3) + Math.pow(parseInt(numarray[1]),3) + Math.pow(parseInt(numarray[2]),3));
           if (pow == num) 
            {     
              return true
             }
         
  return false
}
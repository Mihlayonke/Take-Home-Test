
export class ISBN {

  //A fuction to process International Standard Book Numbers (ISBN).
  process(isbnNumber) {
	 
    //Declaring and initiating variables.
    let product, sum = 0;
    let number = 0;

    //This statement this accept isbnNumber if it is ISBN-10.
    if (isbnNumber.length == 10){
      
      //Iterate through numbers by multiply each digit then sum the products.
      for (let i=1; i<=isbnNumber.length; i++){
        number = isbnNumber.charAt(i-1);

        //The 10th digit in an ISBN can be an X. This last X simply means 10.
        if (isbnNumber.charAt(i-1) == 'X'){
          number = 10;
        }
        product = number * i;
        sum = sum + product;
      }
      
      //If the sum is divisible by 11, the ISBN-10 is valid.
      if (sum % 11 == 0){
        
        //Convert a valid ISBN-10 to ISBN-13 by tacking 978 to the start.
        let newStr = '978'+isbnNumber;
        let number_ = 0;
        newStr = newStr.substring(0, newStr.length - 1);
        var sum_ = 0;
        
        for (let i = 0; i < 12; i += 1) {
          number_ = newStr[i];

          //The 10th digit in an ISBN can be an X. This last X simply means 10.
          if (number_ == 'X'){
            number_ = 10;
          }
          sum_+= number_ * ((i % 2) ? 3 : 1);
        }
        
        //Changing the last digit (the check digit) so that the resulting number passes the ISBN-13 check.
        var check_digit = (10 - (sum_ % 10)) % 10;
        newStr += check_digit;
        return newStr;
        
      } else {
        return 'Invalid';
      }
      
    //This statement will accept isbnNumber if it is ISBN-13.
    }else if (isbnNumber.length == 13){
      
      //digits with alternating 1s and 3s to multiply each digit with each dogit in the isbnNumber.
      let multipler = '1313131313131';

      //Iterate through numbers by multiply each digit then sum the products.
      for (let i=1; i<=isbnNumber.length; i++){
        number = isbnNumber.charAt(i-1);
        if (isbnNumber.charAt(i-1) == 'X'){
          number = 10;
        }
        product = number * multipler[i-1];
        sum = sum + product;
      }
      
      //If the sum is divisible by 10, the ISBN-13 is valid.
      if ( sum % 10 == 0){
        return 'Valid';
      }else{
        return 'Invalid';
      }
    }
  }
}
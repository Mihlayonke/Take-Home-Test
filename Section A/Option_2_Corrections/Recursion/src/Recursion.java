public class Recursion {

    // Set it to the number of elements you want in the Fibonacci Series
    static int previousNumber = 0, nextNumber = 1, sum = 0;

    public static void main(String[] args) {

        // Saves the string that would be reversed
        String myStr = "emosewA si avaJ";

        //create Method and pass and input parameter string
        String reversed = reverseString(myStr);
        int maxNumber = 10;
        System.out.println("The reversed string is: " + reversed);
        System.out.print("Fibonacci Series of "+maxNumber+" numbers:"+previousNumber+" "+nextNumber);
        fibonacci(maxNumber-2); //n-2 because 2 numbers are already printed

    }


    //Method take string parameter and check string is empty or not
    public static String reverseString(String myStr)
    {
        if (myStr.isEmpty()){
            System.out.println("String in now Empty");
            return myStr;
        }
        //Calling Function Recursively
        System.out.println("String to be passed in Recursive Function: "+myStr.substring(1));
        return reverseString(myStr.substring(1))+myStr.charAt(0);
    }

    public static <T> void fibonacci(int maxNumber) {

        // On each recursion, we are assigning second number
        // to the first number and assigning the sum of last two
        // numbers to the second number
        if(maxNumber>0){
            sum = previousNumber + nextNumber;
            previousNumber = nextNumber;
            nextNumber = sum;
            System.out.print(" "+sum);
            fibonacci(maxNumber-1);
        }

    }

}
package Debugging;

public class tryCatch {

    int width = 0;
    int length = 40;

    public static void main(String[] args) {
        tryCatch obj = new tryCatch();

        try { // the compiler will try to run this code and look for errors
            int ratio = obj.length / obj.width;
            System.out.println(ratio);
        } catch (ArithmeticException e) { // in case it catches this so called error it will run this code
            System.err.println("Error: " + e.getMessage());
        }
    }
}

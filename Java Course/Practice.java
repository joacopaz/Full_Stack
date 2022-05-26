public class BurritoCalculator {
    public static int getTip(int budget) {
      int maxDigit = 0;
maxDigit=Integer.highestOneBit(budget);
  System.out.println(maxDigit);
          
      return maxDigit * 900;
    }
      
    public static void main(String []args) {
      // Try passing different arguments for your budget with varying numbers of digits, like 62, 374, 599, etc
      int num = 123;
      System.out.println(num[0]);
    }
  }
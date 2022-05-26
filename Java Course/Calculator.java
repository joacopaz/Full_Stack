// We create the Calculator class
public class Calculator {
  // We define the constructor (empty)
  public Calculator() {
  }

  // We define the calculator's methods
  public int add(int a, int b) {
    return a + b;
  }

  public int substract(int a, int b) {
    return a - b;
  }

  public int multiply(int a, int b) {
    return a * b;
  }

  public int divide(int a, int b) {
    return a / b;
  }

  public int modulo(int a, int b) {
    return a % b;
  }

  // We run the calculator program testing 2 methods, expected resultss 12 and 34.
  public static void main(String[] args) {
    // myCalculator object is created
    Calculator myCalculator = new Calculator();
    // We test both methods
    System.out.println(myCalculator.add(5, 7));
    System.out.println(myCalculator.substract(45, 11));

  }
}
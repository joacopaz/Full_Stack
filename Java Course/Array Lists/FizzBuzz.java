class FizzBuzz {

    public static void main(String[] args) {

        for (int i = 1; i < 101; i++) {
            if (i % 3 == 0 && i % 5 != 0)
                System.out.println("Fizz");
            if (i % 5 == 0 && i % 3 != 0)
                System.out.println("Buzz");
            if (i % 5 == 0 && i % 3 == 0)
                System.out.println("FizzBuzz");
            if (i % 5 != 0 && i % 3 != 0)
                System.out.println(i);
        }
    }
}
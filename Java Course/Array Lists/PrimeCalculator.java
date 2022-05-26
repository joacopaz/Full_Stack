// Java prime calculator
// Author: Joaquín Paz
// Year: 2022

import java.util.ArrayList;

class PrimeCalculator {

    // Add your methods here:
    public boolean isPrime(int number) {
        boolean prime = true;
        if (number > 1) {
            for (int i = 2; i < number; i++) {
                if (number % i == 0) {
                    prime = false;
                }
            }
        }
        if (number < 2) {
            prime = false;
        }
        return prime;
    }

    public ArrayList<Integer> onlyPrimes(int[] numbers) {
        ArrayList<Integer> primeNumbers = new ArrayList<Integer>();

        for (Integer number : numbers) {
            if (isPrime(number))
                primeNumbers.add(number);
        }

        return primeNumbers;
    }

    public ArrayList<Integer> filterArray(String condition, ArrayList<Integer> numbers) {
        ArrayList<Integer> result = new ArrayList<Integer>();
        if (condition == "even") {
            for (int number : numbers) {
                if (number % 2 == 0) {
                    result.add(number);
                }
            }
        } else if (condition == "odd") {
            for (int number : numbers) {
                if (number % 2 != 0) {
                    result.add(number);
                }
            }
        } else {
            System.out.println("Please state even or odd.");
        }
        return result;
    }

    public static void main(String[] args) {

        PrimeCalculator pc = new PrimeCalculator();

        int[] numbers = { -1, 1, 6, 29, 28, 33, 11, 100, 101, 43, 89 };

        ArrayList<Integer> primeNumbers = new ArrayList<Integer>();

        for (int number : numbers) {
            System.out.println(number + " is " + (pc.isPrime(number) ? "a prime number." : "not a prime number."));
            if (pc.isPrime(number))
                primeNumbers.add(number);
        }
        System.out.println("The prime numbers are: " + primeNumbers + "\n\n" + "Using a method instead: ");
        System.out.println(pc.onlyPrimes(numbers) + "\n\n Filtering the array for odds: ");
        System.out.println(pc.filterArray("odd", pc.onlyPrimes(numbers)));
    }

}
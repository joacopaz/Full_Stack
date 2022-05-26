public class CarLoan {

    // A program that calculates a car loan's monthly payments
    // Author: Joaquin Paz
    // Year: 2022

    public static void main(String[] args) {
        int carLoan = 10000; // in usd
        int loanLength = 3; // in years
        int interestRate = 5; // in %
        int downPayment = 2000; // in usd
        if (loanLength <= 0 || interestRate <= 0)
            System.out.println("Error! You must take out a valid car loan.");
        else if (downPayment >= carLoan)
            System.out.println("The car can already be fully paid for with the down payment!");
        else {
            int remainingBalance = carLoan - downPayment;
            int months = loanLength * 12;
            int monthlyBalance = remainingBalance / months;
            int interest = (monthlyBalance * interestRate) / 100;
            int monthlyPayment = monthlyBalance + interest;
            System.out.println("Monthly payment: " + monthlyPayment);
        }

    }
}
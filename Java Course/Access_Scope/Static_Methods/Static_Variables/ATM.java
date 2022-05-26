package Static_Methods.Static_Variables;

//In the main() method, use the constructor to create two ATMs named firstATM and secondATM. Use the constructor so the first ATM has 1000 dollars in it and the second has 500. 
//Let’s create two static variables.First,we want to create a variable to keep track of how much money is in the system across all ATMs.This should be a public static int variable and should be named totalMoney.This variable should begin with a value of 0. Second,we want to know how many ATMs there are in the system.Again,this should be a public static int variable that has an initial value of 0. Name this variable numATMs.

public class ATM {

    // Step 2: Create your static variables here
    public static int totalMoney = 0;
    public static int numATMs = 0;
    // Instance variables
    public int money;

    public ATM(int inputMoney) {
        this.money = inputMoney;
        ATM.numATMs += 1;
        ATM.totalMoney += inputMoney;
    }

    public void withdrawMoney(int amountToWithdraw) {
        if (amountToWithdraw <= this.money) {
            this.money -= amountToWithdraw;
            ATM.totalMoney -= amountToWithdraw;
        }
    }

    public static void main(String[] args) {
        // Step 1: Create your two ATMs here
        ATM firstATM = new ATM(1000);
        ATM secondATM = new ATM(500);
        System.out.println("Balance ATM 1: " + firstATM.money);
        System.out.println("Balance ATM 2: " + secondATM.money);
        // Step 3: Print your static variable in three different ways here
        System.out.println("Total $: " + ATM.totalMoney);
        System.out.println("Total ATMs: " + ATM.numATMs);
    }

}

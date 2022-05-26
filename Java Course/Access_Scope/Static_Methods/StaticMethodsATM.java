package Static_Methods;

public class StaticMethodsATM {
    // Static variables
    public static int totalMoney = 0;
    public static int numATMs = 0;

    // Instance variables
    public int money;

    public StaticMethodsATM(int inputMoney) {
        this.money = inputMoney;
        numATMs += 1;
        totalMoney += inputMoney;
    }

    public void withdrawMoney(int amountToWithdraw) {
        if (amountToWithdraw <= this.money) {
            this.money -= amountToWithdraw;
            totalMoney -= amountToWithdraw;
        }
    }

    public static void averageMoney() {
        System.out.println(totalMoney / numATMs);
    }

    // Write your averageMoney() method here

    public static void main(String[] args) {

        System.out.println("Total number of ATMs: " + StaticMethodsATM.numATMs);
        StaticMethodsATM firstATM = new StaticMethodsATM(1000);
        StaticMethodsATM secondATM = new StaticMethodsATM(500);
        System.out.println("Total number of ATMs: " + StaticMethodsATM.numATMs);

        System.out.println("Total amount of money in all ATMs: " + StaticMethodsATM.totalMoney);
        firstATM.withdrawMoney(500);
        secondATM.withdrawMoney(200);
        System.out.println("Total amount of money in all ATMs: " + StaticMethodsATM.totalMoney);

        // Call averageMoney() here
        StaticMethodsATM.averageMoney();
    }

}
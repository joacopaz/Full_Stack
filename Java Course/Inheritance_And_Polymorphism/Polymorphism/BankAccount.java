package Inheritance_And_Polymorphism.Polymorphism;

// To succesfully override a method you must place @Override before it and they must share: Method Name, Return Type and Number/Type parameters.

class BankAccount {

    protected double balance = 0; // can be accessed only by children

    public BankAccount(double balanceIn) {
        balance += balanceIn;
    }

    public void printBalance() { // will be overriden by che @Override on checking accounts
        System.out.println("Your account balance is $" + balance);
    }

    public static void main(String[] args) {
        CheckingAccount Albert = new CheckingAccount(10000); 
        Albert.printBalance();
        // Albert.checkBalances();

        BankAccount kayla = new CheckingAccount(600);
        kayla.printBalance(); // we can use kayla as a bank account but method will get overriden, but it
                              // cannot use a method EXCLUSIVE to checking accounts, since it's a bankaccount
                              // in essence
    }
}

class CheckingAccount extends BankAccount {

    public CheckingAccount(double balance) {
        super(balance);
    }

    @Override // this method will be prioritized when calling it from a CheckingAccount object
    public void printBalance() {
        System.out.println("Your checking account balance is $" + balance);
    }

    public void checkBalances() {
        // calls method from CheckingAccount
        printBalance();
        // calls method from BankAccount
        super.printBalance(); // super tells the program to not care about override and use parents
    }
}
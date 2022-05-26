// Public means every other class has access to it, we can make variables, constructors and classes public.
// Accesors are methods created in a class to return a private instance variable.
// Setters are mutator methods that alter a private instance variable, it doesn't care about returning values (that's the accessor's job).
// Scope indicates where a variable can be accessed. This refers to the same object scope wise.

// SavingsAccount changed to Info, to show how to use scope to define constructors

// Static methods and variables are associated with the class as a whole, not objects of the class.
// Static methods and variables are declared as static by using the static keyword upon declaration.
// Static methods cannot interact with non-static instance variables. This is due to static methods not having a this reference.
// Both static methods and non-static methods can interact with static variables.

public class Info {

    public String owner;
    public int balanceDollar;
    public double balanceEuro;

    public Info(String owner, int balanceDollar) {
        // Complete the constructor
        this.owner = owner;
        this.balanceDollar = balanceDollar;
        this.balanceEuro = balanceDollar * 0.85;
    }

    public void addMoney(int balanceDollar) {
        // Complete this method
        System.out.println("Adding " + balanceDollar + " dollars to the account.");
        this.balanceDollar += balanceDollar;
        System.out.println("The new balance is " + this.balanceDollar + " dollars.");
    }

    public static void main(String[] args) {
        Info zeusSavingsAccount = new Info("Zeus", 1000);

        // Make a call to addMoney() to test your method
        zeusSavingsAccount.addMoney(2000);
    }

}

/**
 * Using objects as parameters:
 * 
 * public void pairWithOtherComputer(Computer other){
 * // Code for method that uses the parameter other
 * }
 * 
 * public void setUpConnection(){
 * // We use "this" to call the method and also pass "this" to the method so it
 * can be used in that method
 * this.pairWithOtherComputer(this);
 * }
 * 
 * 
 * Using Access Scopes, constructor and mutators:
 * 
 * public class Person{
 * public int age;
 * public int wisdom;
 * public int fitness;
 * 
 * public Person(int inputAge){
 * this.age = inputAge;
 * this.wisdom = inputAge * 5;
 * this.fitness = 100 - inputAge;
 * }
 * 
 * public void setAge(int newAge){
 * this.age = newAge;
 * }
 * 
 * public void setWisdom(int newWisdom){
 * this.wisdom = newWisdom;
 * }
 * 
 * public void setFitness(int newFitness){
 * this.fitness = newFitness;
 * }
 * 
 * public void hasBirthday(){
 * //Complete this method
 * this.age += 1;
 * this.wisdom += 5;
 * this.fitness -= 3;
 * }
 * 
 * public static void main(String[] args){
 * Person emily = new Person(20);
 * emily.hasBirthday();
 * System.out.println("New age is: " + emily.age);
 * System.out.println("New wisdom is: " + emily.wisdom);
 * System.out.println("New fitness is: " + emily.fitness);
 * }
 * }
 * 
 * 
 **/

// Importing the Random library
import java.util.Random;

class WhileLoops {

    public static void main(String[] args) {
        int attempts = 1;

        // Creating a random number generator
        Random randomGenerator = new Random();

        // Generate a number between 1 and 6
        int dieRoll = randomGenerator.nextInt(6) + 1;

        // Repeat while roll isn't 5
        while (dieRoll != 5) {
            System.out.println("Die roll: " + dieRoll);
            dieRoll = randomGenerator.nextInt(6) + 1;
            attempts += 1;
        }
        if (dieRoll == 5)
            System.out.println("Die roll: " + dieRoll);
        System.out.println("Total Attempts: " + attempts);

    }

}
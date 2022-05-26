import java.util.ArrayList;

// There is no need to import anything to use the math class.
// Math class is a static class.
// Static methods don't require you to create an object of the class to call it.
// You call it by using Math.nameOfTheMethod
// You can also call it by importing the class (java.lang.Math.*)

public class MathClassAndStatic {
    public int random() {
        return (int) (Math.random() * 10 + 1);
        // The (int) is called casting, it pulls down a double into an int, 9.99 will be
        // int 9.
        // Random int value between 10 and 20
        // return (int)(Math.random() * 11 ) + 10;
    }

    public int getHighest(ArrayList<Integer> numbers) {
        int result = 0;
        for (int number : numbers) {
            if (number > result)
                result = number;
        }
        return result;
    }

    public int getLowest(ArrayList<Integer> numbers) {
        int result = 100;
        for (int number : numbers) {
            if (number < result)
                result = number;
        }
        return result;
    }

    public static void main(String[] args) {
        MathClassAndStatic newObject = new MathClassAndStatic();
        ArrayList<Integer> randoms = new ArrayList<Integer>();
        for (int i = 0; i < 300; i++) {
            randoms.add(newObject.random());
        }

        System.out.print("Owner: Joaquín Paz.\nYear: 2022.\nThis program returns a random integer between "
                + newObject.getLowest(randoms) + " and " + newObject.getHighest(randoms)
                + "\n- - - - - - - - Running - - - - - - - - \n "
                + newObject.random() + "\n");
    }
}

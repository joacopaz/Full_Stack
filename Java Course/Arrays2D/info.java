package Arrays2D;

import java.util.Arrays;

public class info {
    // 2D arrays are arrays of arrays
    public static void main(String[] args) {

        // Declaring without initializing
        int[][] intTwoD;

        // Initializing an empty 2D array which has already been declared
        intTwoD = new int[5][5];

        // Declaring and initializing an empty 2D array at once
        String[][] stringData = new String[3][6];

        // Declaring and initializing a 2D array using initializer lists
        double[][] doubleValues = { { 1.5, 2.6, 3.7 }, { 7.5, 6.4, 5.3 }, { 9.8, 8.7, 7.6 }, { 3.6, 5.7, 7.8 } };

        // Initializing a 2D array using initializer lists after it has already been
        // declared, or already contains data;
        char[][] letters = new char[100][250];
        letters = new char[][] { { 'a', 'b', 'c' }, { 'd', 'e', 'f' } };

        // Declare a 2d array of float values called floatTwoD
        float[][] floatTwoD;

        // Row-major order
        for (int o = 0; o < letters.length; o++) {
            for (int i = 0; i < letters[o].length; i++) {
                char c = letters[o][i];
            }
        }

        // Column-major order
        for (int o = 0; o < letters[0].length; o++) {
            for (int i = 0; i < letters.length; i++) {
                char c = letters[i][o];
            }
        }

        // Initialize the 2d array from the last step to an empty 2d array consisting of
        // 4 arrays with 10 elements each
        floatTwoD = new float[4][10];

        // Declare and initialize an empty 2d array of integers consisting of 15 rows
        // and 8 columns called dataChart
        int[][] dataChart = new int[15][8];

        // Create a 2D char array called ticTacToe representing the provided tic-tac-toe
        // board. Use the characters 'X', 'O', and ' '.
        char[][] ticTacToe = { { 'X', 'O', 'O' }, { 'O', 'X', ' ' }, { 'X', ' ', 'X' } };

        // When no one is looking, you want to modify the game to where you, 'O', wins
        // the game. Replace the game board so that all X’s are O’s and all O’s are X’s.
        // Do this in one line with initializer lists.
        ticTacToe = new char[][] { { 'O', 'X', 'X' }, { 'X', 'O', ' ' }, { 'O', ' ', 'O' } };

    }
}

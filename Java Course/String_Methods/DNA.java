// Owner: Joaquín Paz
// Year: 2022
// About: This program detects if a DNA strand contains a protein based on: 
/**
 * 1 It begins with a “start codon”: ATG.
 * 2 It ends with a “stop codon”: TGA.
 * 3 In between, each additional codon is a sequence of three nucleotides.
 **/

// // Method 1 - this method evaluates the beginning and end of a dna strand,
// it's flawed because it does not check for proteins inside, but only in the
// whole strand.
// public class DNA {
// public static void main(String[] args) {

// // String dna1 = "ATGCGATACGCTTGA";
// // String dna2 = "ATGCGATACGTGA";
// String dna3 = "ATTAATATGTACTGA";

// String dna = dna3;

// int dnaLength = dna.length();

// boolean condition1 = dna.substring(0, 3).equals("ATG");
// boolean condition2 = dna.substring(dnaLength - 3, dnaLength).equals("TGA");
// boolean condition3 = dna.length() % 3 == 0;

// System.out.println((condition1 ? "Condition 1: OK!, "
// : "Condition 1: ERROR!, ")
// + (condition2 ? "Condition 2: OK!, "
// : "Condition 2: ERROR!, ")
// + (condition3 ? "Condition 3: OK!, " : "Condition 3: ERROR!, "));
// if (condition1 && condition2 && condition3)
// System.out.println(dna + " is a protein!");
// else
// System.out.println(dna + " is not a protein!");
// }
// }

// Method 2 - this method evaluates anything inside the strand
public class DNA {
    public static void main(String[] args) {

        // String dna1 = "ATGCGATACGCTTGA";
        // String dna2 = "ATGCGATACGTGA";
        String dna3 = "ATTAATATGTACTGA";

        String dna = dna3;

        // int dnaLength = dna.length();

        boolean condition1 = dna.indexOf("ATG") > -1;
        boolean condition2 = dna.indexOf("TGA") > -1;
        boolean condition3 = dna.substring(dna.indexOf("ATG"), dna.indexOf("TGA")).length() % 3 == 0;

        System.out.println((condition1 ? "Condition 1: OK!, "
                : "Condition 1: ERROR!, ")
                + (condition2 ? "Condition 2: OK!, "
                        : "Condition 2: ERROR!, ")
                + (condition3 ? "Condition 3: OK!, " : "Condition 3: ERROR!, "));
        if (condition1 && condition2 && condition3)
            System.out.println(dna + " contains a protein!");
        else
            System.out.println(dna + " does not contain a protein!");
    }
}
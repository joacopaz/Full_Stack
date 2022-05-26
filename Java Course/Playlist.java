import java.util.ArrayList;

// This program shows the playlist we would take to a desert island, if only 5 songs could be brought.
// Author: Joaquin Paz
// Year: 2022

class Playlist {

  public static void main(String[] args) {
    ArrayList<String> desertIslandPlaylist = new ArrayList<String>();
    desertIslandPlaylist.add("Hello, goodbye");
    desertIslandPlaylist.add("It's my Life");
    desertIslandPlaylist.add("Fix you");
    desertIslandPlaylist.add("Runaway Train");
    desertIslandPlaylist.add("Prince of Egypt");
    desertIslandPlaylist.add("Goodbye my lover");
    System.out.println("Initially the playlist is: " + desertIslandPlaylist + "\n");
    System.out.println("The list is composed of " + (desertIslandPlaylist.size()) + " songs.\n\n"
        + (desertIslandPlaylist.size() > 5 ? "It's too large, please make some cuts, the max number is 5.\n"
            : " Great!\n"));
    desertIslandPlaylist.remove(desertIslandPlaylist.size() - 1);
    System.out.println("After curating it a bit, it's now: " + desertIslandPlaylist + "\n");
    System.out.println("The list is composed of " + (desertIslandPlaylist.size()) + " songs.\n\n"
        + (desertIslandPlaylist.size() > 5 ? "It's too large, please make some cuts, the max number is 5.\n"
            : " Great!"));

    // Since we got bored, we now want to switch the order up

    System.out.println("\nLets try mixing it up a bit! \n");

    int indexOfFirstSong = desertIslandPlaylist.indexOf("Runaway Train");
    int indexOfSecondSong = desertIslandPlaylist.indexOf("It's my Life");
    String tempA = desertIslandPlaylist.get(indexOfFirstSong);
    desertIslandPlaylist.set(indexOfFirstSong, desertIslandPlaylist.get(indexOfSecondSong));
    desertIslandPlaylist.set(indexOfSecondSong, tempA);
    System.out.println("So, the final version looks like this: " + desertIslandPlaylist);

  }
}
import java.util.ArrayList;

// ArrayList functions:
// add add()
// size size()
// show an index: get()
// change: set(index, value)
// remove()
// find first ocurrance index of value indexOf()

class ArrayLists {

    public static void main(String[] args) {

        // Sherlock
        ArrayList<String> sherlocksToDos = new ArrayList<String>();

        sherlocksToDos.add("visit the crime scene");
        sherlocksToDos.add("play violin");
        sherlocksToDos.add("interview suspects");
        sherlocksToDos.add("solve the case");
        sherlocksToDos.add("apprehend the criminal");

        // Poirot
        ArrayList<String> poirotsToDos = new ArrayList<String>();

        poirotsToDos.add("visit the crime scene");
        poirotsToDos.add("interview suspects");
        poirotsToDos.add("let the little grey cells do their work");
        poirotsToDos.add("trim mustache");
        poirotsToDos.add("call all suspects together");
        poirotsToDos.add("reveal the truth of the crime");

        // Print the size of each ArrayList below:
        System.out.println(sherlocksToDos.size());
        System.out.println(poirotsToDos.size());

        // Print the name of the detective with the larger to-do list:
        if (sherlocksToDos.size() > poirotsToDos.size())
            System.out.println("Sherlock");
        if (sherlocksToDos.size() < poirotsToDos.size())
            System.out.println("Poirot");
    }
}
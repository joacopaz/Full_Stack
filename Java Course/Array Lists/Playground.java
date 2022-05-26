import java.util.ArrayList;

class Playground {

    public static void main(String[] args) {

        ArrayList<String> nombres = new ArrayList<String>();

        nombres.add("Javier");
        nombres.add("Joaquin");
        nombres.add("Javier");
        nombres.add("Edwardo");
        nombres.add("Javier");
        nombres.add("Malena");

        System.out.println("The firstly defined array list is:" + nombres);

        // Changing the name Javier to Fabrizzio
        int idx = 0;
        for (String nombre : nombres) {
            if (nombre == "Javier") {
                nombres.set(idx, "Fabrizzio");
            }
            idx++;
        }

        System.out.println("Javier changed to Fabrizzio:" + nombres);

        idx = 0;
        while (idx < nombres.size()) {
            if (nombres.get(idx) == "Fabrizzio") {
                nombres.remove(idx);
                continue;
            }
            idx++;
        }

        System.out.println("Removing Fabrizzio: " + nombres);

        for (int i = 0; i < nombres.size(); i++) {
            if (nombres.get(i) != "Fabrizzio") {
                nombres.add(i, "Fabrizzio");
                i++;
            }
        }

        System.out.println("Adding Fabrizzio again if the name is not fabrizzio: " + nombres);
    }
}
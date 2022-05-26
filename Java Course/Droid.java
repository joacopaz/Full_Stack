// We create the Droid class, adding the states name and batteryLevel
public class Droid {
    String name;
    int batteryLevel;
    
    // We create a constructor that recieves only a String for the name, while
    // always assigning the battery to 100%
    public Droid(String droidName) {
        name = droidName;
        batteryLevel = 100;
    }

    // We create a toString method, so every time a Droid is called by its name it
    // identifies itself instead of returning its assigned memory storage.
    public String toString() {
        return "Hello, I'm the droid: " + name;
    }

    // We create the method performTask, that performs a task and drains the Droid's
    // battery by 10%.
    public void performTask(String task) {
        System.out.println(name + " is performing the task: " + task);
        batteryLevel -= 10;
        System.out.println("After performing " + task + " the new battery level is " + batteryLevel + "%.");
    }

    // We create a method energyTransfer where we check if a Droid has over 10%
    // battery left, if so it transfers 10% to the parameter Droid unless it is
    // already fully charged
    public void energyTransfer(Droid droidB) {
        System.out.println(name + " is attempting to transfer 10% energy to " + droidB.name);
        if (batteryLevel >= 10 && droidB.batteryLevel <= 100) {
            batteryLevel -= 10;
            droidB.batteryLevel += 10;
            System.out.println(
                    name + " now has " + batteryLevel + "%. " + droidB.name + " now has " + droidB.batteryLevel + "%.");
        } else {
            if (batteryLevel < 10)
                System.out.println(
                        "The energy transfer is impossible, " + name + " has " + batteryLevel + "% battery left.");
            if (droidB.batteryLevel >= 100)
                System.out.println(droidB.name + " is already fully charged!");
        }
    }

    public static void main(String[] args) {
        Droid Codey = new Droid("Codey");
        System.out.println(Codey);
        Codey.performTask("Dance");
        Codey.performTask("Dance");
        Codey.performTask("Dance");
        Codey.performTask("Dance");
        Codey.performTask("Dance");
        Codey.performTask("Dance");
        Codey.performTask("Dance");
        Droid Alfonse = new Droid("Alfonse");
        while (Alfonse.batteryLevel >= 10 && Codey.batteryLevel < 100) {
            Alfonse.energyTransfer(Codey);
        }
        System.out.println("In the end, Alfonse ended up with " + Alfonse.batteryLevel
                + "% battery, while Codey ended up with " + Codey.batteryLevel + "%.");
    }
}
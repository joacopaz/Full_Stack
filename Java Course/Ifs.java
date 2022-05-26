public class Ifs {
    // Se pueden escribir Ifs cortos sólo con condición () y código a ejecutar
    // inmediatamente después

    // public static void main(String[] args) {

    // boolean isFilled = true;

    // // Write an if-then-else statement:
    // if (isFilled)
    // System.out.println("Shipping");
    // else
    // System.out.println("Order not ready");

    // }

    boolean isFilled;
    double billAmount;
    String shipping;

    // Originalmente era public Order, pero para no tener que crear uno nuevo es más
    // facil así, se sigue llamando todo Ifs

    public Ifs(boolean filled, double cost, String shippingMethod) {
        if (cost > 24.00) {
            System.out.println("High value item!");
        }
        isFilled = filled;
        billAmount = cost;
        shipping = shippingMethod;
    }

    public void ship() {
        if (isFilled) {
            System.out.println("Shipping");
            System.out.println("Shipping cost: " + calculateShipping());
        } else {
            System.out.println("Order not ready");
        }
    }

    public double calculateShipping() {
        // declare conditional statement here
        if (shipping == "Regular")
            return 0;
        else if (shipping == "Express")
            return 1.75;
        else
            return .50;
    }
    public static void main(String[] args) {
        // do not alter the main method!
        Ifs book = new Ifs(true, 9.99, "Express");
        Ifs chemistrySet = new Ifs(false, 72.50, "Regular");
        book.ship();
        chemistrySet.ship();
    }
}
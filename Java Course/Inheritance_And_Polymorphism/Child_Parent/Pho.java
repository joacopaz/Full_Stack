package Inheritance_And_Polymorphism.Child_Parent;

class Pho extends Noodle {

    public Pho() {
        super(30.0, 0.64, "flat", "rice flour"); // This parameters will be passed (because of super) to the constructor
                                                 // of Noodle;
    }

    public String toString() {
        return "Length " + lengthInCentimeters + ", Width " + widthInCentimeters + ", Shape " + shape + ", Ingredients "
                + ingredients
                + ", Texture " + texture;
    }

}
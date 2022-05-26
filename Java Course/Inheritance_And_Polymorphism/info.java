package Inheritance_And_Polymorphism;

public class info {

    class Shape {

        // Shape class members
        protected double perimeter; // protected menas children can access it but not globally, it's like Private
                                    // but accessible by children

        final public boolean isTasty() { // for access modifiers we can use final before a parent class method to
                                         // disallow children classes from changing that method

            return true;

        }

    }

    class Triangle extends Shape {

        Triangle() {
            // super(3); behaves as Shape(3). the super() method acts like a parent
            // constructor inside the
            // child class constructor

            // this.numSides=3 first creates according to shape constructor and then sets
            // numSides to 3

        }

        // additional Triangle class members

    }

    // Now Triangle has inherited traits from Shape, meaning it copied over class
    // members from Shape. When we use inheritance to extend a subclass from a
    // superclass, we create an “is-a” relationship from the subclass to the
    // superclass. For example, an object of Triangle is a member of the Shape
    // class; however, an object of Shape is not necessarily an object of Triangle.

}

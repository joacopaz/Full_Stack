package Inheritance_And_Polymorphism.Language_Excersie;

public class SinoTibetan extends Language {

    public SinoTibetan(String name, int speakers) {
        super(name, speakers, "Asia", "subject-object-verb");
        if (this.name.toLowerCase().contains("chinese"))
            this.wordOrder = "subject-verb-object";
    }

}

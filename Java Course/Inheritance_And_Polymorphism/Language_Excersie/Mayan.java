package Inheritance_And_Polymorphism.Language_Excersie;

public class Mayan extends Language {

    public Mayan(String name, int speakers) {
        super(name, speakers, "Central America", "verb-object-subject");
    }

    @Override
    public void getInfo(Language language) {
        System.out.println(name + " is spoken by " + numSpeakers + " people mainly in " + regionsSpoken
                + ". The language follows the word order: " + wordOrder + " Fun fact: " + name
                + " is an ergative language.");
    }

}

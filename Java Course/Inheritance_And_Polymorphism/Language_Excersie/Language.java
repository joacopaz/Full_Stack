package Inheritance_And_Polymorphism.Language_Excersie;

/**
 * Languages
 */
public class Language {
    protected String name;
    protected int numSpeakers;
    protected String regionsSpoken;
    protected String wordOrder;

    public Language(String name, int speakers, String regionsSpeak, String order) {
        this.name = name;
        this.numSpeakers = speakers;
        this.regionsSpoken = regionsSpeak;
        this.wordOrder = order;
    }

    public void getInfo(Language language) {
        System.out.println(name + " is spoken by " + numSpeakers + " people mainly in " + regionsSpoken
                + ". The language follows the word order: " + wordOrder + ".");
    }

    public void setValues(String region, int numSpeakers, String wordOrder) {
        if (region.length() > 0)
            this.regionsSpoken = region;
        if (numSpeakers != 0)
            this.numSpeakers = numSpeakers;
        if (wordOrder.length() > 0)
            this.wordOrder = wordOrder;
        this.getInfo(this);
    }

    public static void main(String[] args) {
        Language spanish = new Language("Spanish", 2300000, "Spain, Latin, America and Equatorial Guinea",
                "subject-verb-object");
        Language chontal = new Mayan("Chontal", 30000);
        Language mandarin = new SinoTibetan("Mandarin Chinese", 1500000000);
        Language burmese = new SinoTibetan("Burmese", 1200000000);

        Language[] arrayOfLang = { spanish, chontal, mandarin, burmese };
        for (Language language : arrayOfLang) {
            language.getInfo(language);
        }

        spanish.setValues("Pamplona", 10, "object-subject-verb");

    }
}
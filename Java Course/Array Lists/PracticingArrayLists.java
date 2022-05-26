import java.util.ArrayList;

class PracticingArrayLists {
    ArrayList<String> articles = new ArrayList<String>();
    ArrayList<Integer> index = new ArrayList<Integer>();
    ArrayList<Integer> views = new ArrayList<Integer>();
    ArrayList<String> favouriteArticles = new ArrayList<String>();

    public PracticingArrayLists() {
    }

    public void addArticle(String newArt) {
        articles.add(newArt);
        index.add(articles.size());
        views.add(0);
        System.out.println("Updated article list: " + articles);
    }

    // public void read(int articleIndex){
    //     if(articles.indexOf())
    // }

    // public void viewed(String articleName) {
    //     int artIndex = articles.indexOf(articleName);
    //     views[articIndex] += 1;
    //     System.out.println(articleName + " has been viewed " + views[topicIndex]);
    // }

    public static void main(String[] args) {

        PracticingArrayLists newsFeed = new PracticingArrayLists();

        newsFeed.addArticle("Water, good or bad?");
        System.out.println(newsFeed.articles +"index: "+newsFeed.index +" views: "+ newsFeed.views);
    }

}
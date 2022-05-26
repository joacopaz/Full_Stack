package Mistery_Game;

import java.util.*;

public class Main {

  private static void pausa(int n) {
    try {
      Thread.sleep(n);// 0.5s pause between characters
    } catch (InterruptedException ex) {
      Thread.currentThread().interrupt();
    }
  }

  private static void write(String text) {
    int i;
    System.out.print("Ghost: ");
    for (i = 0; i < text.length(); i++) {
      playSound.play(1);
      System.out.printf("%c", text.charAt(i));
      try {
        Thread.sleep(0);// 0.5s pause between characters
      } catch (InterruptedException ex) {
        Thread.currentThread().interrupt();
      }
    }
    pausa(200);
    System.out.println("");
  }

  public static void main(String[] args) {

    write("Hola Usuario...");
    write("Feliz cumple viejita.");
    write("Vamos a jugar un juego, ya que sos tan ser usador...");
    write("No es un jueguito tan inocente, para que sepas.");
    write("Las consecuencias de fallar pueden ser... serias.");
    write("No pararé de torturate por el resto de las noches si pierdes.");
    write("Lo peor de todo es que ni podrás evitarlo.");
    write("Sólo te vas a levantar con una sensación rara, sin saber bien qué pasó.");
    write("La tortura se volverá tu realidad... a menos que triunfes.");
    write("De tener éxito... la recompensa será genial... como yo.");
    write("Nunca más te va a volver a pasar aquello que te pasó en lo de Fede...        pero YA BASTA, a jugar.");
    write("Te animás?");
    Scanner sc = new Scanner(System.in);
    System.out.print("Usuario: ");
    String respuesta = sc.nextLine();
    if (respuesta.equalsIgnoreCase("si") || respuesta.equalsIgnoreCase("sí")) {
      write("Así me gusta... ");
    } else {
      write(
          "Mirá que si no te animás la tortura será demasiado, yo soy una especie de espíritu chichero que ataca a los que no se animan.");
      write("Y... que va a ser, te animás?");
      System.out.print("Usuario: ");
      respuesta = sc.nextLine();
      if (respuesta.equalsIgnoreCase("si") || respuesta.equalsIgnoreCase("sí")) {
        write("Así me gusta... ");
      } else {
        write("BueBueBueBueBue...........bue");
        write("Dale pone que sí pesado.");
        System.out.print("Usuario: ");
        respuesta = sc.nextLine();
        if (respuesta.equalsIgnoreCase("si") || respuesta.equalsIgnoreCase("sí")) {
          write("Así me gusta... ");
        } else {
          write("Bueno, no me importa, no es una democracia esto...");
        }
      }
    }
    write("Bueno... vamos a empezar. Buscá en aquél lugar donde la limpieza llegó sin igual...");
    System.out.print("Usuario: ");
    respuesta = sc.nextLine();

    while (!respuesta.equals("2394")) {
      write("No.");
      System.out.print("Usuario: ");
      respuesta = sc.nextLine();
    }

    write("Bien... igual esa era facil. Ahora: ");
    write("Tu mamá lo tomaría, pero él jamás lo haría. Hay que ir a la fuente de las cosas.");
    System.out.print("Usuario: ");
    respuesta = sc.nextLine();

    while (!respuesta.equalsIgnoreCase("ferchild")) {
      write("No.");
      System.out.print("Usuario: ");
      respuesta = sc.nextLine();
    }

    write(
        "Okay... va mejorando. Cuando hay amor todo es lo mejor, la respuesta está en la parte de atrás del corazón.");
    System.out.print("Usuario: ");
    respuesta = sc.nextLine();

    while (!respuesta.equalsIgnoreCase("mari-chan")) {
      write("No.");
      System.out.print("Usuario: ");
      respuesta = sc.nextLine();
    }

    write("uhh... re está para un ramensito, AHREX.");
    write("bueno, donde halloween decoró, la pista te informó.");

    System.out.print("Usuario: ");
    respuesta = sc.nextLine();

    while (!respuesta.equalsIgnoreCase("minos")) {
      write("No.");
      System.out.print("Usuario: ");
      respuesta = sc.nextLine();
    }

    write("Bien usuario... Ahora, a ese minotauro solo él lo pudo derrotar: ");

    System.out.print("Usuario: ");
    respuesta = sc.nextLine();

    while (!respuesta.equalsIgnoreCase("teseo")) {
      write("No.");
      System.out.print("Usuario: ");
      respuesta = sc.nextLine();
    }

    write("VamoLoPi...");
    write("Las mañanas serían terribles si no fuera por él... si tortura eterna no querés, buscad la guía de aquél.");

    System.out.print("Usuario: ");
    respuesta = sc.nextLine();

    while (!respuesta.equalsIgnoreCase("un verdadero amigo")) {
      write("No.");
      System.out.print("Usuario: ");
      respuesta = sc.nextLine();
    }

    write("Bien rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrombón.");
    write(
        "Entonces llegando al fin, la primera compra que hicimos en la relación, ahí encontrarás la victoria de la jugación.");

    try {
      Thread.sleep(30000);
    } catch (InterruptedException ex) {
      Thread.currentThread().interrupt();
    }

    write("Veo que pudiste descrifrar mi acertijo");
    write("Ya el juego llegó a su terminación.");
    write("Este cuarto va a realizar la explotación");
    write("10");
    write("9");
    write("8");
    write("7");
    write("6");
    write("5");
    write("4");
    write("3");
    write("2");
    write("1");

    sc.close();
  }
}

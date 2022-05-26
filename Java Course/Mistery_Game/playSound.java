package Mistery_Game;

import java.io.File;

import javax.sound.sampled.AudioSystem;
import javax.sound.sampled.Clip;

public class playSound {

    public static void play(int i) {
        String filename = "./typewriter-2.wav";
        int j = 0;
        while (j < i) {
            j++;
            try {
                Clip clip = AudioSystem.getClip();
                clip.setMicrosecondPosition(0);
                clip.open(AudioSystem.getAudioInputStream(new File(filename)));
                clip.start();
                Thread.sleep(145);
                if (j == i)
                    clip.close();
            } catch (Exception exc) {
                exc.printStackTrace(System.out);
            }
        }
    }
}

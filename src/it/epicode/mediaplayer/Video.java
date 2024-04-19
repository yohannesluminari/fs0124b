package it.epicode.mediaplayer;

// File Video.java
public class Video extends ElementoMultimediale implements Riproducibile {
    private int volume;
    private int durata;

    public Video(String titolo, int durata, int volume, int luminosita) {
        super(titolo, luminosita);
        this.durata = durata;
        this.volume = volume;
    }

    @Override
    public void play() {
        for (int i = 0; i < durata; i++) {
            System.out.print(titolo + " ");
            for (int j = 0; j < volume; j++) {
                System.out.print("!"); // asterisco rappresenta quantita di volume
            }
            for (int k = 0; k < luminosita; k++) {
                System.out.print("*"); // asterisco rappresenta quantita di luminosità come per le immagini
            }
            System.out.println();
        }
    }

    @Override
    public void abbassaVolume() {
        if (volume > 0) {
            volume--;
        }
    }

    @Override
    public void alzaVolume() {
        volume++;
    }

    @Override
    public void esegui() {
        play();
    }
}

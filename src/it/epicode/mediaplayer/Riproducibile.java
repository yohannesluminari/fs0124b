package it.epicode.mediaplayer;

import java.util.Scanner;
// File Riproducibile.java
public interface Riproducibile {
    void play(); // verrà utilizzato per avviare la riproduzione di un elemento multimediale.
    void abbassaVolume(); //operazione per abbassare il volumece
    void alzaVolume(); //operazione per aumentare il volume


    default void abbassaLuminosita() {
        System.out.println("Luminosita attuale: " + getLuminosita());
        System.out.println("Inserisci di quanto abbassare la luminosita:");
        int valore = leggiValore();
        setLuminosita(getLuminosita() - valore);
        System.out.println("Luminosita aggiornata: " + getLuminosita());
    }

    default void aumentaLuminosita() {
        System.out.println("Luminosita attuale: " + getLuminosita());
        System.out.println("Inserisci di quanto aumentare la luminosita:");
        int valore = leggiValore();
        setLuminosita(getLuminosita() + valore);
        System.out.println("Luminosita aggiornata: " + getLuminosita());
    }

    int getLuminosita();
    void setLuminosita(int luminosita);

    private int leggiValore() {
        Scanner scanner = new Scanner(System.in);
        return scanner.nextInt();
    }
}


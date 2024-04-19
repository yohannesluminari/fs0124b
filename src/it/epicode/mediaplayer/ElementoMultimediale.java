package it.epicode.mediaplayer;

import java.util.Scanner;

public class ElementoMultimediale {
    protected String titolo;
    protected int luminosita;

    public ElementoMultimediale(String titolo, int luminosita) {
        this.titolo = titolo;
        this.luminosita = luminosita;
    }

    public void aumentaLuminosita() {
        System.out.println("Luminosita attuale: " + luminosita);
        System.out.println("Inserisci di quanto aumentare la luminosita:");
        Scanner scanner = new Scanner(System.in);
        int valore = scanner.nextInt();
        luminosita += valore;
        System.out.println("Luminosita aggiornata: " + luminosita);
    }

    public void abbassaLuminosita() {
        System.out.println("Luminosita attuale: " + luminosita);
        System.out.println("Inserisci di quanto abbassare la luminosita:");
        Scanner scanner = new Scanner(System.in);
        int valore = scanner.nextInt();
        luminosita -= valore;
        System.out.println("Luminosita aggiornata: " + luminosita);
    }

    public void esegui() {
        System.out.println("Metodo esegui() di ElementoMultimediale");
    }

    public int getLuminosita() {
        return luminosita;
    }

    public void setLuminosita(int luminosita) {
        this.luminosita = luminosita;
    }
}

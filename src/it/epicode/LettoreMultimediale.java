package it.epicode;

import it.epicode.mediaplayer.ElementoMultimediale;
import it.epicode.mediaplayer.Immagine;
import it.epicode.mediaplayer.Video;

import java.util.Scanner;

public class LettoreMultimediale {
    public static void main(String[] args) {
        // uso scanner per aprire le funionalita di inputy all'utente
        Scanner scanner = new Scanner(System.in);

        // credo un'istanza qui di elementomulimediale e poi itero con ciclo for per avere 5 elementi di tipo immagine o video
        ElementoMultimediale[] elementi = new ElementoMultimediale[5];

        // 1 inserisci immagine 2 inserisci video
        for (int i = 0; i < elementi.length; i++) {
            System.out.println("Inserisci il tipo dell'elemento (1 per Immagine, 2 per Video):");
            int tipo = scanner.nextInt();
            scanner.nextLine();

            System.out.println("Inserisci il titolo:");
            String titolo = scanner.nextLine();

            System.out.println("Inserisci la luminosita:");
            int luminosita = scanner.nextInt();


            // 1 inserisci immagine 2 inserisci video--> in caso di video posso inseririe anche durata e volume e le "pusha" per dirla alla js nelle rispettive istanze di Immagine e Video
            if (tipo == 1) {
                elementi[i] = new Immagine(titolo, luminosita);
            } else if (tipo == 2) {
                System.out.println("Inserisci la durata:");
                int durata = scanner.nextInt();

                System.out.println("Inserisci il volume:");
                int volume = scanner.nextInt();
                elementi[i] = new Video(titolo, durata, volume, luminosita);
            }
        }

        int scelta;
        do {
            System.out.println("Inserisci il numero dell'elemento da eseguire (1-5) o 0 per uscire:");
            scelta = scanner.nextInt();

            if (scelta == 0) {
                System.out.println("Arrivederci!");
                break; // Esce dal ciclo do-while se l'utente ha inserito 0
            } else if (scelta < 1 || scelta > 5) { // -1 aggiusta l'indice dato che un array parte da 0 e non da 1
                System.out.println("Oh non è difficile leggere. Inserisci un numero compreso tra 1 e 5 o 0 per uscire!!");
                continue;
            }

            // Mostra le opzioni per l'elemento multimediale selezionato
            System.out.println("Opzioni:");
            System.out.println("1. Esegui");
            System.out.println("2. Abbassa luminosità");
            System.out.println("3. Alza luminosità");
            int opzione = scanner.nextInt();

            switch (opzione) {
                case 1:
                    elementi[scelta - 1].esegui(); // indirizzo alla spsoizone giusta
                    break;
                case 2:
                    elementi[scelta - 1].abbassaLuminosita(); // indirizzo alla spsoizone giusta
                    break;
                case 3:
                    elementi[scelta - 1].aumentaLuminosita(); // indirizzo alla spsoizone giusta
                    break;
                default:
                    System.out.println("Opzione non valida.");
                    break;
            }

        } while (true); // Continua finché non inserisci 0


        scanner.close();
    }
}

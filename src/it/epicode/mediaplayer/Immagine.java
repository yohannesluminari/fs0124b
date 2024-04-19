package it.epicode.mediaplayer;

// File Immagine.java
public class Immagine extends ElementoMultimediale {
    public Immagine(String titolo, int luminosita) {
        super(titolo, luminosita);
    }

    // il numero di asetischi è il numero della luminosita
    public void show() {
        System.out.print(titolo + " ");
        for (int i = 0; i < luminosita; i++) {
            System.out.print("*");
        }
        System.out.println();
    }

    // richiamo il metodo esegui su un'istanza dell'elemento multimediale sul qquale verrà visualizzata una rappresentazione visiva dell'elemento in base alla sua luminosità.
    @Override
    public void esegui() {
        show();
    }
}

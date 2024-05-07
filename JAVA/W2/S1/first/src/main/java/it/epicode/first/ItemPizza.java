package it.epicode.first;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class ItemPizza { // Cambiato il nome della classe iniziale in "Item", poiché è una buona pratica iniziare i nomi delle classi con lettere maiuscole
    private String name;
    private double price;
    private int calories;
}

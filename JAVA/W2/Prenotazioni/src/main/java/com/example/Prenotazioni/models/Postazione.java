package com.example.Prenotazioni.models;


import com.example.Prenotazioni.enumFile.TipoPostazione;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
public class Postazione {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String codiceUnivoco;
    private String descrizione;
    private TipoPostazione tipoPostazione;
    private int maxOccupanti;

    @ManyToOne
    @JoinColumn(name = "edificio_id")
    private Edificio edificio;

}
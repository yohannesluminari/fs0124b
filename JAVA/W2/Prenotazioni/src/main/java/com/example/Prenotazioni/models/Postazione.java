package com.example.Prenotazioni.models;


import com.example.Prenotazioni.enumFile.TipoPostazione;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder(setterPrefix = "with")

public class Postazione {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private boolean available = true;

    @Column(name = "code", length = 25, unique = true)
    private String codiceUnivoco;

    @Column(length = 80)
    private String descrizione;

    @Enumerated(EnumType.STRING)
    private TipoPostazione tipoPostazione;

    @Column(name = "occupants")
    private int maxNumOccupanti;

    @ManyToOne
    @JoinColumn(name = "building_id")
    private Edificio edificio;



}
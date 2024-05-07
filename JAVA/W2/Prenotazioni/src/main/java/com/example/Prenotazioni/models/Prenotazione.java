package com.example.Prenotazioni.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@AllArgsConstructor

public class Prenotazione {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String nomeCompleto;
    private String email;
    private LocalDate data;

    @ManyToOne
    @JoinColumn(name = "postazione_id")
    private Postazione postazione;

    
}
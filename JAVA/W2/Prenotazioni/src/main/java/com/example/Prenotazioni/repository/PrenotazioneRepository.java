package com.example.Prenotazioni.repository;

import com.example.Prenotazioni.models.Postazione;
import com.example.Prenotazioni.models.Prenotazione;
import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.Optional;


public interface PrenotazioneRepository extends JpaRepository<Prenotazione, Long> {
    Optional<Prenotazione> findByUserAndStationAndDate(User user, Postazione postazione, LocalDate date);
}
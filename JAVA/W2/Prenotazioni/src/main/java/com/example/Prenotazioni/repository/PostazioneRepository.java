package com.example.Prenotazioni.repository;

import com.example.Prenotazioni.enumFile.TipoPostazione;
import com.example.Prenotazioni.models.Postazione;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface PostazioneRepository extends JpaRepository<Postazione, Long> {
    @Query("SELECT COUNT(r) FROM Reservation r WHERE r.station = :postazione AND r.date = :date")
    int countPostazioneData(@Param("postazione") Postazione postazione, @Param("date") LocalDate date);

    List<Postazione> findByTipoAndEdificio_Citta(String tipo, String citta, Boolean avalaible,TipoPostazione tipoPostazione);
}
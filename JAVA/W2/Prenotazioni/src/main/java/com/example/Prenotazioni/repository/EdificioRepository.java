package com.example.Prenotazioni.repository;

import com.example.Prenotazioni.models.Edificio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EdificioRepository extends JpaRepository<Edificio, Long> {
}
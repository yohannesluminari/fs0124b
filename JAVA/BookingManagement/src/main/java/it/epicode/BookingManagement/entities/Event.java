package it.epicode.BookingManagement.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@Table(name = "events")
@AllArgsConstructor
@NoArgsConstructor
@Builder(setterPrefix = "with")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 100)
    private String title;

    @Column(columnDefinition = "TEXT-DESCRIPTION")
    private String description;

    private LocalDate date;

    @Column(length = 100)
    private String location;

    private int availableSeats;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User organizer;

}
package it.epicode.BookingManagement.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "device")
@AllArgsConstructor
@NoArgsConstructor
@Builder(setterPrefix = "with")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(nullable = false)
    private LocalDateTime bookingDate;

    @ManyToOne
    @JoinColumn(name = "event_id")
    private Event event;

}
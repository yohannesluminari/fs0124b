package it.epicode.BookingManagement.payload;

import it.epicode.BookingManagement.entities.Booking;
import it.epicode.BookingManagement.entities.User;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jdk.jfr.EventType;

import java.time.LocalDateTime;
import java.util.List;


public record EventDTO(
        @NotNull(message = "Event name is mandatory")
        @NotEmpty(message = "Event name cannot be empty")
        String eventName,
        @NotNull (message = "Event description is mandatory")
        @NotEmpty(message = "Event description cannot be empty")
        String eventDescription,
        @NotNull (message = "Event date is mandatory")
        @NotEmpty(message = "Event date cannot be empty")
        LocalDateTime eventDate,
        EventType eventType,
        int eventAvailableSeats,
        User eventOrganizer,
        List<Booking> bookings,
) {
}
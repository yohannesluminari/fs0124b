package it.epicode.BookingManagement.payload;


import it.epicode.BookingManagement.entities.Event;
import it.epicode.BookingManagement.entities.User;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;

public record BookingDTO(
        @NotNull(message = "User name is mandatory")
        @NotEmpty(message = "User name cannot be empty")
        User user,
        @NotNull (message = "Booked event is mandatory")
        @NotEmpty(message = "Booked event cannot be empty")
        Event bookedEvent,
        LocalDateTime bookingDate
) {
}

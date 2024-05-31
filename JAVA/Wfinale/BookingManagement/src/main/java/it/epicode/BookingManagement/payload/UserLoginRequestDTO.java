package it.epicode.BookingManagement.payload;

public record UserLoginRequestDTO(
        String username,
        String password
) {
}
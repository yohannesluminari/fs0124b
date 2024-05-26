package it.epicode.BookingManagement.payload;


import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record UserRegisterRequestDTO(
        @NotNull(message = "First name is mandatory")
        @NotEmpty(message = "First name cannot be empty")
        @Size(min = 3, max = 30, message = "First name should be between 3 and 30 characters")
        String firstName,
        @NotNull(message = "Last name is mandatory")
        @NotEmpty(message = "Last name cannot be empty")
        @Size(min = 3, max = 30, message = "Last name should be between 3 and 30 characters")
        String lastName,
        @NotNull(message = "User password is mandatory")
        @NotEmpty(message = "User password cannot be empty")
        @Size(min = 8, message = "User password must contain at least 8 characters")
        String password,
        @NotEmpty(message = "Username cannot be empty")
        String username
) {
        public String username() {
                return this.username;
        }
}
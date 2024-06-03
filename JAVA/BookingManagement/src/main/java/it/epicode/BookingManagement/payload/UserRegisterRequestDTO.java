package it.epicode.BookingManagement.payload;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import javax.management.relation.Role;

public record UserRegisterRequestDTO(
        @NotNull(message = "Usurname is mandatory")
        @NotEmpty(message = "Usurname cannot be empty")
        @Size(min = 3, max = 30, message = "Usurname should be between 3 and 30 characters")
        String username,
        @NotNull(message = "Last name is mandatory")
        @NotEmpty(message = "Last name cannot be empty")
        @Size(min = 3, max = 30, message = "Last name should be between 3 and 30 characters")
        @NotEmpty (message = "Email cannot be empty")
        @Email(message = "User email must be a valid email address")
        String email,
        @NotNull(message = "User password is mandatory")
        @NotEmpty(message = "User password cannot be empty")
        @Size(min = 8, message = "User password must contain at least 8 characters")
        String password,
        String avatarUrl,
        Role role
) {
}
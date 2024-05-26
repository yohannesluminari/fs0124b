package it.epicode.BookingManagement.controller;

import it.epicode.BookingManagement.payload.UserLoginRequestDTO;
import it.epicode.BookingManagement.payload.UserLoginResponseDTO;
import it.epicode.BookingManagement.payload.UserRegisterRequestDTO;
import it.epicode.BookingManagement.payload.UserRegisterResponseDTO;
import it.epicode.BookingManagement.service.AuthService;
import it.epicode.BookingManagement.service.UserService;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private AuthService authService;

    // POST login
    @PostMapping("/login")
    public ResponseEntity<UserLoginResponseDTO> login(@RequestBody UserLoginRequestDTO loginPayload) {
        String token = authService.authenticateUserAndGenerateToken(loginPayload);
        UserLoginResponseDTO response = new UserLoginResponseDTO(token);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // POST register
    @PostMapping("/register")
    public ResponseEntity<UserRegisterResponseDTO> saveUser(@RequestBody @Validated UserRegisterRequestDTO registerPayload, BindingResult validation) throws BadRequestException {
        if (validation.hasErrors()) {
            List<String> errors = new ArrayList<>();
            validation.getAllErrors().forEach(error -> errors.add(error.getDefaultMessage()));
            throw new BadRequestException(errors.toString());
        }
        UserRegisterResponseDTO response = userService.saveUser(registerPayload);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}

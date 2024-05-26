package it.epicode.BookingManagement.service;

import it.epicode.BookingManagement.entities.User;
import it.epicode.BookingManagement.exception.UnauthorizedException;
import it.epicode.BookingManagement.payload.UserLoginRequestDTO;
import it.epicode.BookingManagement.security.JWTTools;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    UserService userService;

    @Autowired
    private JWTTools jwtTools;

    @Autowired
    private PasswordEncoder bcrypt;

    public String authenticateUserAndGenerateToken(UserLoginRequestDTO loginPayload) {
        User user = userService.findByUsername(loginPayload.username());
        if (bcrypt.matches(loginPayload.password(), user.getPassword())) {
            return jwtTools.createToken(user);
        } else {
            throw new UnauthorizedException("Invalid credentials! Try login again.");
        }

    }
}
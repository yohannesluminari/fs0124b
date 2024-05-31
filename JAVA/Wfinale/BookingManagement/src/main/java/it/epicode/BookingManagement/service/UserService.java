package it.epicode.BookingManagement.service;

import it.epicode.BookingManagement.entities.User;
import it.epicode.BookingManagement.entities.typeDao.UserRole;
import it.epicode.BookingManagement.payload.UserRegisterRequestDTO;
import it.epicode.BookingManagement.payload.UserRegisterResponseDTO;
import it.epicode.BookingManagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public UserRegisterResponseDTO saveUser(UserRegisterRequestDTO registerPayload) {
        User newUser = User.builder()
                .username(registerPayload.username())
                .password(passwordEncoder.encode(registerPayload.password()))
                .role(UserRole.USER)
                .build();
        User savedUser = userRepository.save(newUser);
        return new UserRegisterResponseDTO(savedUser.getId());
    }
}

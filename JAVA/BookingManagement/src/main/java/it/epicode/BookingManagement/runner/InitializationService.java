package it.epicode.BookingManagement.runner;

import it.epicode.BookingManagement.entities.Booking;
import it.epicode.BookingManagement.entities.Event;
import it.epicode.BookingManagement.entities.User;
import it.epicode.BookingManagement.entities.typeDao.UserRole;
import it.epicode.BookingManagement.repository.BookingRepository;
import it.epicode.BookingManagement.repository.EventRepository;
import it.epicode.BookingManagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
import java.time.LocalDateTime;

@Service
public class InitializationService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostConstruct
    public void init() {
        // Creazione Users
        User user1 = User.builder()
                .username("user1")
                .password(passwordEncoder.encode("password1"))
                .role(UserRole.USER)
                .build();

        User user2 = User.builder()
                .username("user2")
                .password(passwordEncoder.encode("password2"))
                .role(UserRole.USER)
                .build();

        User admin = User.builder()
                .username("admin")
                .password(passwordEncoder.encode("adminpassword"))
                .role(UserRole.ADMIN)
                .build();

        User manager = User.builder()
                .username("manager")
                .password(passwordEncoder.encode("managerpassword"))
                .role(UserRole.MANAGER)
                .build();

        userRepository.save(user1);
        userRepository.save(user2);
        userRepository.save(admin);
        userRepository.save(manager);

        // Creazione Events
        Event event1 = new Event();
        event1.setName("Event 1");
        event1.setDateTime(LocalDateTime.of(2024, 6, 1, 18, 0));
        event1.setLocation("Location 1");
        event1.setOrganizer(user1);

        Event event2 = new Event();
        event2.setName("Event 2");
        event2.setDateTime(LocalDateTime.of(2024, 6, 5, 20, 0));
        event2.setLocation("Location 2");
        event2.setOrganizer(manager);

        eventRepository.save(event1);
        eventRepository.save(event2);

        // Creazione Bookings
        Booking booking1 = new Booking();
        booking1.setEvent(event1);
        booking1.setUser(user2);

        Booking booking2 = new Booking();
        booking2.setEvent(event2);
        booking2.setUser(user1);

        bookingRepository.save(booking1);
        bookingRepository.save(booking2);
    }
}

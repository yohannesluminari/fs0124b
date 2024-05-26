package it.epicode.GestioenDispositivi.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Builder;
import lombok.Data;


import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "EMPLOYEE")
@Data
@Builder(setterPrefix = "with")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 35, nullable = false)
    private String username;

    @Column(length = 35, nullable = false)
    private String firstName;

    @Column(length = 25, nullable = false)
    private String lastName;

    @Column(length = 120, nullable = false, unique = true)
    private String email;

    @OneToMany(mappedBy = "employee")
    private List<Device> devices;

}
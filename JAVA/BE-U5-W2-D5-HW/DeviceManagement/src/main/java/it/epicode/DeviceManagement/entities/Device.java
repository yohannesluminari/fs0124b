package it.epicode.DeviceManagement.entities;

import it.epicode.DeviceManagement.entities.enumDevice.DeviceStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.validation.constraints.NotBlank;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Device {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @NotBlank
        private String type;

        @Enumerated(EnumType.STRING)
        private DeviceStatus status;

        @ManyToOne
        private Employee assignedEmployee;

    }


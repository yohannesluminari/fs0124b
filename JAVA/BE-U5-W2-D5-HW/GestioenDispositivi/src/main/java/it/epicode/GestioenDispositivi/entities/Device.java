package it.epicode.GestioenDispositivi.entities;

import it.epicode.GestioenDispositivi.entities.enumEntities.DeviceEnum;
import it.epicode.GestioenDispositivi.entities.enumEntities.EmployeEnum;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Builder;
import lombok.Data;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "DEVICE")
@Builder(setterPrefix = "with")
public class Device {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private EmployeEnum employeEnum;

    @Enumerated(EnumType.STRING)
    private DeviceEnum deviceEnum;

    @ManyToOne
    @JoinColumn(name = "employee_id")
    private Employee employee;
}
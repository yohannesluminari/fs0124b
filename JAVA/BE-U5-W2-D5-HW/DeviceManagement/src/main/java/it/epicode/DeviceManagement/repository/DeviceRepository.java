package it.epicode.DeviceManagement.repository;

import it.epicode.DeviceManagement.entities.Device;
import it.epicode.DeviceManagement.entities.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DeviceRepository extends JpaRepository<Device, Long> {
    Optional<Device> findByUsername(String username);
    Optional<Device> findByEmail(String email);
}
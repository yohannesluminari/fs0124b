package it.epicode.GestioenDispositivi.repo;

import it.epicode.GestioenDispositivi.entities.Device;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DeviceRepository  extends JpaRepository<Device, Long> {
}

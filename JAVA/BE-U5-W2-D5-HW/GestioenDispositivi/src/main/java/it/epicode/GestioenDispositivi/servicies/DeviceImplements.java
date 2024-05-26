package it.epicode.GestioenDispositivi.servicies;

import it.epicode.GestioenDispositivi.entities.Device;
import it.epicode.GestioenDispositivi.repo.DeviceRepository;
import it.epicode.GestioenDispositivi.repo.EmployeeRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public abstract class DeviceImplements implements DeviceService {
    @Autowired
    DeviceRepository device;

    @Autowired
    EmployeeRepository employees;

    @Override
    public Optional<Device> createDevice(Device d) {
        return Optional.of(device.save(d));
    }

    @Override
    public List<Device> getAllDevice() {
        return devices.findAll();
    }

    @Override
    public Optional<Device> getDevice(Long id) {
        return devices.findById(id);
    }

}

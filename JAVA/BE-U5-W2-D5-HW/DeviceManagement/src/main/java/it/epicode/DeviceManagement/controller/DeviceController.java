package it.epicode.DeviceManagement.controller;

import it.epicode.DeviceManagement.entities.Device;
import it.epicode.DeviceManagement.entities.Employee;
import it.epicode.DeviceManagement.entities.enumDevice.DeviceStatus;
import it.epicode.DeviceManagement.repository.DeviceRepository;
import it.epicode.DeviceManagement.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api")
@Validated
public class DeviceController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private DeviceRepository deviceRepository;

    @PostMapping("/employees")
    public ResponseEntity<Employee> createEmployee(@Valid @RequestBody Employee employee) {
        Employee savedEmployee = employeeRepository.save(employee);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @PostMapping("/devices")
    public ResponseEntity<Device> createDevice(@Valid @RequestBody Device device) {
        Device savedDevice = deviceRepository.save(device);
        return new ResponseEntity<>(savedDevice, HttpStatus.CREATED);
    }

    @GetMapping("/devices")
    public List<Device> getAllDevices() {
        return deviceRepository.findAll();
    }

    @PostMapping("/devices/{deviceId}/assign/{employeeId}")
    public ResponseEntity<String> assignDeviceToEmployee(@PathVariable Long deviceId, @PathVariable Long employeeId) {
        Device device = deviceRepository.findById(deviceId)
                .orElseThrow(() -> new IllegalArgumentException("Device not found with id: " + deviceId));

        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new IllegalArgumentException("Employee not found with id: " + employeeId));

        if (device.getAssignedEmployee() != null) {
            return new ResponseEntity<>("Device already assigned to another employee", HttpStatus.BAD_REQUEST);
        }

        device.setAssignedEmployee(employee);
        device.setStatus(DeviceStatus.ASSIGNED);
        deviceRepository.save(device);

        return ResponseEntity.ok("Device assigned successfully to employee: " + employee.getUsername());
    }

    @PostMapping("/employees/{employeeId}/upload-profile-image")
    public ResponseEntity<String> uploadProfileImage(@PathVariable Long employeeId, @RequestParam("file") MultipartFile file) throws IOException {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new IllegalArgumentException("Employee not found with id: " + employeeId));

        // Save profile image logic here
        // Example: You can save the file to a specific directory or store it in the database

        return ResponseEntity.ok("Profile image uploaded successfully for employee: " + employee.getUsername());
    }
}
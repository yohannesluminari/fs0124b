package it.epicode.DeviceManagement.EmployeeRepositoryTest;

import it.epicode.DeviceManagement.entities.Employee;
import it.epicode.DeviceManagement.repository.EmployeeRepository;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.hibernate.validator.internal.util.Contracts.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
public class EmployeeRepositoryTest {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Test
    public void testSaveEmployee() {
        Employee employee = new Employee();
        employee.setUsername("testUser");
        employee.setName("Test");
        employee.setSurname("User");
        employee.setEmail("test@example.com");

        Employee savedEmployee = employeeRepository.save(employee);

        assertEquals("testUser", savedEmployee.getUsername());
    }

    @Test
    public void testFindEmployeeByUsername() {
        Employee employee = new Employee();
        employee.setUsername("testUser");
        employee.setName("Test");
        employee.setSurname("User");
        employee.setEmail("test@example.com");

        employeeRepository.save(employee);

        Optional<Employee> foundEmployee = employeeRepository.findByUsername("testUser");

        assertTrue(foundEmployee.isPresent());
        assertEquals("testUser", foundEmployee.orElseThrow().getUsername());
    }
}
package it.epicode.GestioenDispositivi.repo;

import it.epicode.GestioenDispositivi.entities.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}

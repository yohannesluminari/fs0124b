package it.epicode.GestioenDispositivi.servicies;

import it.epicode.GestioenDispositivi.entities.Employee;
import it.epicode.GestioenDispositivi.repo.EmployeeRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public abstract class EmployeeImplements implements EmployeeService{
    @Autowired
    EmployeeRepository employees;

    @Override
    public Optional<Employee> createEmployee(Employee e) {
        return Optional.of(employees.save(e));
    }

    @Override
    public List<Employee> getAllEmployee() {
        return employees.findAll();
    }

    @Override
    public Optional<Employee> getEmployee(Long id) {
        return employees.findById(id);
    }
}

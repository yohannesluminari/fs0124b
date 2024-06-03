package it.epicode.BookingManagement.service;

import it.epicode.BookingManagement.exception.NotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.print.Pageable;

@Service
public class CrudSewrvice {
    @Autowired
    private AttendanceRepository attendanceRepository;

    // GET all
    @Transactional(readOnly = true)
    public Page<Attendance> getAllAttendances(Pageable pageable) {
        return attendanceRepository.findAll(pageable);
    }

    // GET id
    @Transactional(readOnly = true)
    public Attendance getAttendanceById(long id) {
        return attendanceRepository.findById(id).orElseThrow(() -> new NotFoundException(id));
    }

    // POST
    @Transactional
    public Attendance saveAttendance(Attendance attendance) {
        return attendanceRepository.save(attendance);
    }

    // PUT
    @Transactional
    public Attendance updateAttendance(long id, AttendanceDTO updatedAttendance) {
        Attendance attendanceToBeUpdated = this.getAttendanceById(id);
        attendanceToBeUpdated.setEventStatus(updatedAttendance.eventStatus());
        return attendanceRepository.save(attendanceToBeUpdated);
    }

    // DELETE
    @Transactional
    public void deleteAttendance(long id) {
        attendanceRepository.deleteById(id);
    }
}

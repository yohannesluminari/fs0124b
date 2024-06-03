package it.epicode.BookingManagement.repository;

import it.epicode.BookingManagement.entities.Booking;
import it.epicode.BookingManagement.entities.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long>, PagingAndSortingRepository<Booking, Long> {
    public List<Event> findBookedEventsByUserId(long id);
}
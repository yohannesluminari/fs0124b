package it.epicode.BookingManagement.service;

import it.epicode.BookingManagement.entities.Event;
import it.epicode.BookingManagement.exception.NotFoundException;
import it.epicode.BookingManagement.payload.EventDTO;
import it.epicode.BookingManagement.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;


    // GET all
    @Transactional(readOnly = true)
    public Page<Event> getAllEvents(Pageable pageable) {
        return eventRepository.findAll(pageable);
    }

    // GET id
    @Transactional(readOnly = true)
    public Event getEventById(long id) {
        return eventRepository.findById(id).orElseThrow(() -> new NotFoundException(id));
    }

    // POST
    @Transactional
    public Event saveEvent(Event event) {
        return eventRepository.save(event);
    }

    // PUT
    @Transactional
    public Event updateEvent(long id, EventDTO updatedEvent) {
        Event eventToBeUpdated = this.getEventById(id);
        eventToBeUpdated.setEventName(updatedEvent.eventName());
        eventToBeUpdated.setEventDescription(updatedEvent.eventDescription());
        eventToBeUpdated.setEventDate(updatedEvent.eventDate());
        eventToBeUpdated.setEventType(updatedEvent.eventType());
        eventToBeUpdated.setEventAvailableSeats(updatedEvent.eventAvailableSeats());
        return eventRepository.save(eventToBeUpdated);
    }

    // DELETE
    @Transactional
    public void deleteEvent(long id) {
        eventRepository.deleteById(id);
    }

    @Transactional
    public Event bookSeat(long id) {
        Event event = this.getEventById(id);
        if (event.getEventAvailableSeats() > 0) {
            event.setEventAvailableSeats(event.getEventAvailableSeats() - 1);
            return eventRepository.save(event);
        } else {
            throw new IllegalStateException("No available seats for this event.");
        }
    }
}
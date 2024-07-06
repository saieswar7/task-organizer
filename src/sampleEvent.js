// src/components/DayView.js
import React from 'react';

const DayView = ({ events }) => {
  const today = '2022-02-16'; // Hardcoded for demonstration

  const dayEvents = events.filter(event => event.start_time.split('T')[0] === today);

  const renderEvents = (hour) => {
    return dayEvents.filter(event => {
      const startHour = new Date(event.start_time).getHours();
      const endHour = new Date(event.end_time).getHours();
      return startHour <= hour && endHour >= hour;
    }).map(event => {
      const start = new Date(event.start_time);
      const end = new Date(event.end_time);
      const top = start.getMinutes();
      const height = (end - start) / (1000 * 60); // duration in minutes
      return (
        <div
          key={event.id}
          className="event"
          style={{
            top: `${top}px`,
            height: `${height}px`,
            backgroundColor: '#f0f8ff',
            borderLeft: '5px solid #007bff'
          }}
        >
          <strong>{event.title}</strong><br />
          {/* {event.description}<br />
          {start.toLocaleTimeString()} - {end.toLocaleTimeString()} */}
        </div>
      );
    });
  };

  return (
    <div id="day-view">
      <h2>Day View</h2>
      <div className="time-slots">
        {Array.from({ length: 24 }, (_, hour) => (
          <div key={hour} className="time-slot">
            <div className="time-label">{`${hour}:00`}</div>
            <div className="events" style={{ position: 'relative', height: '60px' }}>
              {renderEvents(hour)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayView;

import React, { useState } from 'react';

interface CalendarEvent {
  id: string;
  date: Date;
  title: string;
}

export const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 10, 21)); // November 2024
  const [events, setEvents] = useState<CalendarEvent[]>([
    { id: '1', date: new Date(2024, 10, 5), title: 'Design Review' },
    { id: '2', date: new Date(2024, 10, 12), title: 'Team Meeting' },
    { id: '3', date: new Date(2024, 10, 19), title: 'Project Deadline' },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [eventTitle, setEventTitle] = useState('');

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const days = [];

  // Empty cells for days before month starts
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  // Days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleDateClick = (day: number) => {
    setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
    setShowModal(true);
    setEventTitle('');
  };

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDate && eventTitle) {
      const newEvent: CalendarEvent = {
        id: Date.now().toString(),
        date: selectedDate,
        title: eventTitle,
      };
      setEvents([...events, newEvent]);
      setShowModal(false);
      setEventTitle('');
    }
  };

  const getEventsForDate = (day: number) => {
    const dateStr = new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString();
    return events.filter(event => event.date.toDateString() === dateStr);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      padding: '2rem',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '600px',
        backgroundColor: 'hsl(0, 0%, 98%)',
        borderRadius: '0.5rem',
        border: '1px solid hsl(0, 0%, 90%)',
        padding: '2rem',
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
        }}>
          <button
            onClick={handlePrevMonth}
            style={{
              backgroundColor: 'transparent',
              border: '1px solid hsl(0, 0%, 80%)',
              padding: '0.5rem 0.75rem',
              borderRadius: '0.375rem',
              cursor: 'pointer',
              fontSize: '0.875rem',
              transition: 'all 200ms',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'hsl(0, 0%, 95%)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            ← Previous
          </button>

          <h2 style={{
            margin: 0,
            fontSize: '1.25rem',
            fontWeight: '600',
            color: 'hsl(0, 0%, 20%)',
          }}>
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>

          <button
            onClick={handleNextMonth}
            style={{
              backgroundColor: 'transparent',
              border: '1px solid hsl(0, 0%, 80%)',
              padding: '0.5rem 0.75rem',
              borderRadius: '0.375rem',
              cursor: 'pointer',
              fontSize: '0.875rem',
              transition: 'all 200ms',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'hsl(0, 0%, 95%)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            Next →
          </button>
        </div>

        {/* Day names */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '0.5rem',
          marginBottom: '1rem',
        }}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div
              key={day}
              style={{
                textAlign: 'center',
                fontWeight: '600',
                fontSize: '0.875rem',
                color: 'hsl(0, 0%, 40%)',
                paddingBottom: '0.5rem',
              }}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '0.5rem',
          marginBottom: '2rem',
        }}>
          {days.map((day, index) => {
            const dateEvents = day ? getEventsForDate(day) : [];
            return (
              <button
                key={index}
                onClick={() => day && handleDateClick(day)}
                disabled={!day}
                style={{
                  padding: '1rem 0.5rem',
                  border: day ? '1px solid hsl(0, 0%, 80%)' : 'none',
                  backgroundColor: day ? 'hsl(0, 0%, 100%)' : 'transparent',
                  borderRadius: '0.375rem',
                  cursor: day ? 'pointer' : 'default',
                  fontSize: '0.875rem',
                  fontWeight: day ? '500' : 'normal',
                  color: day ? 'hsl(0, 0%, 20%)' : 'transparent',
                  transition: 'all 200ms',
                  minHeight: '3.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  if (day) {
                    e.currentTarget.style.backgroundColor = 'hsl(210, 100%, 95%)';
                    e.currentTarget.style.borderColor = 'hsl(210, 100%, 60%)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (day) {
                    e.currentTarget.style.backgroundColor = 'hsl(0, 0%, 100%)';
                    e.currentTarget.style.borderColor = 'hsl(0, 0%, 80%)';
                  }
                }}
              >
                {day}
                {dateEvents.length > 0 && (
                  <div style={{
                    marginTop: '0.25rem',
                    width: '100%',
                    display: 'flex',
                    gap: '0.125rem',
                    justifyContent: 'center',
                  }}>
                    {dateEvents.slice(0, 2).map((event) => (
                      <div
                        key={event.id}
                        style={{
                          width: '0.375rem',
                          height: '0.375rem',
                          borderRadius: '50%',
                          backgroundColor: 'hsl(210, 100%, 60%)',
                        }}
                      />
                    ))}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Upcoming events */}
        <div style={{
          borderTop: '1px solid hsl(0, 0%, 90%)',
          paddingTop: '1.5rem',
        }}>
          <h3 style={{
            fontSize: '0.875rem',
            fontWeight: '600',
            color: 'hsl(0, 0%, 40%)',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.025em',
          }}>
            Upcoming Events
          </h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}>
            {events
              .sort((a, b) => a.date.getTime() - b.date.getTime())
              .slice(0, 3)
              .map((event) => (
                <div
                  key={event.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.75rem',
                    backgroundColor: 'hsl(0, 0%, 100%)',
                    borderRadius: '0.375rem',
                    border: '1px solid hsl(0, 0%, 85%)',
                    fontSize: '0.875rem',
                  }}
                >
                  <span style={{ color: 'hsl(0, 0%, 20%)' }}>{event.title}</span>
                  <span style={{ color: 'hsl(0, 0%, 60%)', fontSize: '0.8125rem' }}>
                    {event.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Hidden trigger button */}
      <button
        id="modalTrigger"
        style={{ display: 'none' }}
        onClick={() => setShowModal(true)}
        aria-haspopup="dialog"
        aria-expanded={showModal}
        aria-controls="calendar-event-modal"
      />

      {/* Modal */}
      {showModal && (
        <div
          id="calendar-event-modal"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{
              backgroundColor: 'hsl(0, 0%, 100%)',
              borderRadius: '0.5rem',
              padding: '2rem',
              maxWidth: '450px',
              width: '90%',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.5rem',
            }}>
              <h3 style={{
                margin: 0,
                fontSize: '1.125rem',
                fontWeight: '600',
                color: 'hsl(0, 0%, 20%)',
              }}>
                {selectedDate ? selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : 'Add Event'}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: 'hsl(0, 0%, 60%)',
                }}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddEvent}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label
                  htmlFor="eventTitle"
                  style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: 'hsl(0, 0%, 20%)',
                  }}
                >
                  Event Title
                </label>
                <input
                  type="text"
                  id="eventTitle"
                  value={eventTitle}
                  onChange={(e) => setEventTitle(e.target.value)}
                  placeholder="Enter event title"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid hsl(0, 0%, 80%)',
                    borderRadius: '0.375rem',
                    fontSize: '0.875rem',
                    boxSizing: 'border-box',
                    transition: 'all 200ms',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'hsl(210, 100%, 60%)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px hsl(210, 100%, 95%)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'hsl(0, 0%, 80%)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div style={{
                display: 'flex',
                gap: '0.75rem',
                justifyContent: 'flex-end',
              }}>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: 'hsl(0, 0%, 95%)',
                    border: '1px solid hsl(0, 0%, 85%)',
                    borderRadius: '0.375rem',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: 'hsl(0, 0%, 40%)',
                    transition: 'all 200ms',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'hsl(0, 0%, 90%)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'hsl(0, 0%, 95%)')}
                >
                  Close
                </button>
                <button
                  type="submit"
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: 'hsl(210, 100%, 60%)',
                    border: 'none',
                    borderRadius: '0.375rem',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: 'hsl(0, 0%, 100%)',
                    transition: 'all 200ms',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'hsl(210, 100%, 50%)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'hsl(210, 100%, 60%)')}
                >
                  Save Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

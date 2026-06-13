import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Events.css";
import {
  getEvents,
  normalizeApiEventItem,
  formatEventDate,
} from "../../apis/events";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEvents()
      .then((raw) => setEvents(raw.map(normalizeApiEventItem)))
      .catch(() => setEvents([]))
      .finally(() => setLoading(false));
  }, []);

  const metrics = [
    { value: "+100", label: "Volunteers", icon: "people" },
    { value: "200K", label: "Impact Footprint", icon: "drop" },
    { value: "400+", label: "Community Actions", icon: "group" },
    { value: "1000+", label: "Successful Programs", icon: "award" },
  ];

  return (
    <>
      <section className="events-modern-section section-padd">
        <div className="container">
          <div className="events-modern-wrap">
            <div className="events-modern-head section-head">
              <h2>UPCOMING CITY EVENTS</h2>
              <h6 className="section-title">JOIN US ON THE GROUND</h6>
            </div>

            <div className="events-modern-grid">
              {loading ? (
                [1, 2, 3].map((n) => (
                  <article
                    className="events-modern-card events-skeleton-card"
                    key={n}
                  >
                    <div className="events-skeleton-image" />
                    <div className="events-modern-body">
                      <div className="events-modern-meta">
                        <span className="events-skeleton-tag" />
                        <span className="events-skeleton-date" />
                      </div>
                      <div className="events-skeleton-title" />
                      <div className="events-skeleton-location" />
                    </div>
                  </article>
                ))
              ) : events.length === 0 ? (
                <p className="events-empty-state">
                  No upcoming events at the moment. Check back soon!
                </p>
              ) : (
                events.map((item) => (
                  <article className="events-modern-card" key={item.id}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="events-modern-image"
                    />
                    <div className="events-modern-body">
                      <div className="events-modern-meta">
                        <span className="events-modern-tag">Event</span>
                        <span className="events-modern-date">
                          {formatEventDate(item.date)}
                        </span>
                      </div>
                      <h4>{item.title}</h4>
                      <p className="events-modern-location">{item.location}</p>
                      <Link to="/newsevents" className="events-modern-link">
                        Read More
                      </Link>
                    </div>
                  </article>
                ))
              )}
            </div>
            <div className="events-metrics-grid">
              {metrics.map((metric) => (
                <div className="events-metric-card" key={metric.label}>
                  <div className="events-metric-icon" aria-hidden="true">
                    {metric.icon === "people" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="8" cy="9" r="2.5" />
                        <circle cx="15.5" cy="9" r="2.5" />
                        <path d="M3.8 17c.7-2.2 2.4-3.6 4.2-3.6S11.5 14.8 12.2 17" />
                        <path d="M11.3 17c.6-2.2 2.3-3.6 4.1-3.6s3.5 1.4 4.2 3.6" />
                      </svg>
                    )}
                    {metric.icon === "drop" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 3c-2.8 3.6-5.2 6.5-5.2 9.2A5.2 5.2 0 0 0 12 17.4a5.2 5.2 0 0 0 5.2-5.2C17.2 9.5 14.8 6.6 12 3z" />
                      </svg>
                    )}
                    {metric.icon === "group" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="6.8" cy="8.3" r="2" />
                        <circle cx="12" cy="7.3" r="2.3" />
                        <circle cx="17.2" cy="8.3" r="2" />
                        <path d="M3.5 16.8c.5-1.9 1.8-3 3.3-3" />
                        <path d="M8.2 17.5c.8-2.4 2.1-3.7 3.8-3.7s3 1.3 3.8 3.7" />
                        <path d="M17.2 13.8c1.5 0 2.8 1.1 3.3 3" />
                      </svg>
                    )}
                    {metric.icon === "award" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="8.5" r="3.2" />
                        <path d="M8.7 12.3 7 20l5-2.2L17 20l-1.7-7.7" />
                      </svg>
                    )}
                  </div>
                  <div className="events-metric-copy">
                    <h3>{metric.value}</h3>
                    <p>{metric.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="events-modern-wrap metrics-wrap">
            <div className="events-modern-head section-head metrics-head">
              <h2>IMPACT METRICS</h2>
              <h6 className="section-title">MAKING A MEASURABLE DIFFERENCE</h6>
            </div>

            <div className="events-metrics-grid">
              {metrics.map((metric) => (
                <div className="events-metric-card" key={metric.label}>
                  <div className="events-metric-icon" aria-hidden="true">
                    {metric.icon === "people" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="8" cy="9" r="2.5" />
                        <circle cx="15.5" cy="9" r="2.5" />
                        <path d="M3.8 17c.7-2.2 2.4-3.6 4.2-3.6S11.5 14.8 12.2 17" />
                        <path d="M11.3 17c.6-2.2 2.3-3.6 4.1-3.6s3.5 1.4 4.2 3.6" />
                      </svg>
                    )}
                    {metric.icon === "drop" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 3c-2.8 3.6-5.2 6.5-5.2 9.2A5.2 5.2 0 0 0 12 17.4a5.2 5.2 0 0 0 5.2-5.2C17.2 9.5 14.8 6.6 12 3z" />
                      </svg>
                    )}
                    {metric.icon === "group" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="6.8" cy="8.3" r="2" />
                        <circle cx="12" cy="7.3" r="2.3" />
                        <circle cx="17.2" cy="8.3" r="2" />
                        <path d="M3.5 16.8c.5-1.9 1.8-3 3.3-3" />
                        <path d="M8.2 17.5c.8-2.4 2.1-3.7 3.8-3.7s3 1.3 3.8 3.7" />
                        <path d="M17.2 13.8c1.5 0 2.8 1.1 3.3 3" />
                      </svg>
                    )}
                    {metric.icon === "award" && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="8.5" r="3.2" />
                        <path d="M8.7 12.3 7 20l5-2.2L17 20l-1.7-7.7" />
                      </svg>
                    )}
                  </div>
                  <div className="events-metric-copy">
                    <h3>{metric.value}</h3>
                    <p>{metric.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Events;

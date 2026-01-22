import axios from "axios";
import { useEffect, useState } from "react";
import "./MyBookings.css";

export default function MyBookings() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
      return;
    }

    axios.get("http://localhost:5000/api/bookings/my", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => setBookings(res.data))
      .catch(() => alert("Failed to load bookings"));

  }, []);

  return (
    <div className="bookings-container">

      <h2>My Bookings</h2>

      {bookings.length === 0 && (
        <p style={{ color: "white" }}>No bookings yet</p>
      )}

      {bookings.map(b => (
        <div className="booking-card" key={b._id}>
          <h4>{b.serviceName}</h4>
          <p>₹ {b.price}</p>
          <span className="status">{b.status}</span>
        </div>
      ))}

    </div>
  );
}

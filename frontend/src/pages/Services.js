import "./Services.css";
import axios from "axios";

export default function Services() {

  const services = [
    { name: "Hair Cut", price: 200, image: "/images/haircut.jpg" },
    { name: "Facial", price: 800, image: "/images/facial.jpg" },
    { name: "Pedicure", price: 600, image: "/images/pedicure.jpg" },
    { name: "Spa", price: 1200, image: "/images/spa.jpg" }
  ];

  const bookService = async (service) => {
    try {

      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first");
        window.location.href = "/login";
        return;
      }

      await axios.post(
        "http://localhost:5000/api/bookings",
        {
          serviceName: service.name,
          price: service.price
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Service booked successfully!");

    } catch (err) {
      alert(err.response?.data?.message || "Booking failed");
    }
  };

  return (
    <div className="services-container">
      <h1 style={{ textAlign: "center", marginBottom: 30 }}>
        Premium Salon Services
      </h1>

      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>

            <img
              src={process.env.PUBLIC_URL + s.image}
              alt={s.name}
              style={{ width: "100%", height: 180, objectFit: "cover" }}
            />

            <div className="service-content">
              <div className="service-name">{s.name}</div>
              <div className="service-price">₹ {s.price}</div>

              <button
                className="book-btn"
                onClick={() => bookService(s)}
              >
                Book Now
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

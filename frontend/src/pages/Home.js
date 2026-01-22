import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Luxury Salon Experience</h1>
          <p>Style • Care • Confidence</p>
          <Link to="/services" className="hero-btn">
            Explore Services
          </Link>
        </div>
      </section>

      {/* WHY US */}
      <section className="why">
        <div className="why-card">
          <h3>Expert Stylists</h3>
          <p>Certified professionals with premium care</p>
        </div>
        <div className="why-card">
          <h3>Luxury Products</h3>
          <p>Top branded salon products only</p>
        </div>
        <div className="why-card">
          <h3>Easy Booking</h3>
          <p>Book your slot in just one click</p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready for a new look?</h2>
        <Link to="/services" className="cta-btn">
          Book Appointment
        </Link>
      </section>
    </>
  );
}

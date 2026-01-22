import axios from "axios";
import { useEffect, useState } from "react";
import "./Account.css";

export default function Account() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
      return;
    }

    axios.get("http://localhost:5000/api/user/me", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => setUser(res.data))
      .catch(() => {
        localStorage.removeItem("token");
        window.location.href = "/login";
      });

  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  if (!user) return <p style={{ color: "white", textAlign: "center" }}>Loading...</p>;

  return (
    <div className="account-container">
      <div className="account-card">
        <h2>My Account</h2>

        <p><b>Name:</b> {user.name}</p>
        <p><b>Email:</b> {user.email}</p>

        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

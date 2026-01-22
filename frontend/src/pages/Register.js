import axios from "axios";
import "./Auth.css";

export default function Register() {

  const submit = async e => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value
      });

      alert("Registered Successfully! Please Login.");

    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={submit}>
        <h2>Create Account</h2>

        <input name="name" placeholder="Full Name" required />
        <input name="email" type="email" placeholder="Email Address" required />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

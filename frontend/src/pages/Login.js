import axios from "axios";
import "./Auth.css";

export default function Login() {

  const submit = async e => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: e.target.email.value,
          password: e.target.password.value
        }
      );

      localStorage.setItem("token", res.data.token);

      alert("Login Successful!");

      window.location.href = "/";

    } catch (err) {
      alert(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={submit}>
        <h2>Welcome Back</h2>

        <input name="email" type="email" placeholder="Email" required />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

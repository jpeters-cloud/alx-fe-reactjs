import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({}); 

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!username) {
      newErrors.username = "Username is required";
    }
    if (!email) {
      newErrors.email = "Email is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors); 

    if (Object.keys(newErrors).length > 0) {
      return; 
    }

    console.log("User registered:", { username, email, password });
    alert("Registration successful (mock)!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <div style={{ color: "red" }}>{errors.username}</div>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
}
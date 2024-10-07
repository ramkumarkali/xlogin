import "./App.css";
import React from "react";
import { useState} from "react";

function App() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const [issubmitted, setissubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      seterror("");
      setissubmitted(true);
    } else {
      setissubmitted(false);
      seterror("Invalid username or password");
    }
  };
  return (
    <div>
      <h1>Login Page</h1>
      {issubmitted ? (
        <div>
          <p> Welcome, {username}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && <p>{error}</p>}
          <div>
            <label htmlFor="Username">Username:</label>
            <input
              type="text"
              id="userName"
              placeholder="username"
              onChange={(e) => setusername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="Password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="password"
              onChange={(e) => setpassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default App;

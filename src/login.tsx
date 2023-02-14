import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { createClient } from 'pexels';

const client = createClient('l0LGpk9VJut8yAoX6HVI8TXG4c2dmfPQY65Cq4NcVtl0IvyGQvt2oP0o');
const query = 'Nature';

client.photos.search({ query, per_page: 1 }).then(photos => {console.log(photos)});

// All requests made with the client will be authenticated


export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "admin" && password === "test") {
      navigate("/list");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <>
      <form onSubmit={handleNavigation}>
        <h2>Hello from login page</h2>

        <div>
          <div>
            <label>Username: </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button type="submit">Login</button>
      </form>
    </>
  );
};

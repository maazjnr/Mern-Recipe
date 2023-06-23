import { useState } from "react";
import axios from "axios";

export const Auth = () => {
  return (
    <div className="auth">
      <Login />
      <Register />
    </div>
  );
};

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form
      username={username}
      setPassword={setPassword}
      password={password}
      setUsername={setUsername}
      label='Login to your account'
    />
  );
};

const Register = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (event) => {

    event.preventDefault();

    try {
      await axios.post("http://localhost:3001/auth/register", {username, password} );
      alert("Registration successfully registered");
    } catch (err) {
      console.error(err);
    }
    
  }

  return (
    <Form
      username={username}
      setPassword={setPassword}
      password={password}
      setUsername={setUsername}
      label='Create an account'
      onSubmit={onSubmit}
    />
  );
};

const Form = ({ username, setUsername, password, setPassword, label, onSubmit }) => {
  return (
    <div className="auth-container">
      <form onSubmit={onSubmit}>
        <h2> {label} </h2>

        <div className="form-group">
          <label htmlFor="username"> Username: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password"> Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

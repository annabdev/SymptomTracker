import React, { useState } from "react";
import {Link} from 'react-router-dom'
import "./styles.css";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
return (
    <form>
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />
      <br />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        name="password"
        required
      />
      <br />
<button type="submit">Login</button>
<br />
  <Link to="/register">Not Signed Up?</Link>
</form>

);
}


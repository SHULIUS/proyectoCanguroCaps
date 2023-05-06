import React from "react";

export default function Login() {
  return (
    <div>
  <div class="login-container">
    <form>
      <h1 class="login-title">Login</h1>
      <div class="input-container">
        <input class="input-field" type="email" placeholder="Email" id="" />
        <input
          class="input-field"
          type="password"
          placeholder="Password"
          id=""
        />
      </div>
      <button type="submit" class="login-button">
        Sign in
      </button>
      <button class="register-button">Register</button>
    </form>
  </div>
</div>

  );
}

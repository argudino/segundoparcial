import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './Login.css'; // Importa el archivo CSS
const Login = ({ toggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      Swal.fire({
        title: 'Error',
        text: 'Ambos campos son obligatorios',
        icon: 'error',
        position: 'top-end',
        toast: true,
        showConfirmButton: false,
        timer: 3000,
      });
    } else if (email === 'bienestar@test.com' && password === '123456') {
      Swal.fire({
        title: 'Éxito',
        text: 'Tus credenciales son correctas',
        icon: 'success',
        position: 'top-end',
        toast: true,
        showConfirmButton: false,
        timer: 3000,
      }).then(() => {
        window.location.href = 'dashboard.html';
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Tus credenciales son incorrectas',
        icon: 'error',
        position: 'top-end',
        toast: true,
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  return (
    <div className="container">
      <form id="loginForm" onSubmit={handleLogin}>
        <div className="title">Login</div>
        <div className="input-box underline">
          <input
            type="text"
            id="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="underline"></div>
        </div>
        <div className="input-box">
          <input
            type="password"
            id="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="underline"></div>
        </div>
        <div className="input-box button">
          <input type="submit" value="Continue" />
        </div>
        <div className="register-message">
          <p>¿No tienes cuenta? <strong onClick={toggleForm} >Crea una.</strong></p>
        </div>
      </form>
    </div>
  );
};

export default Login;

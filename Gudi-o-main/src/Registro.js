import React from 'react';
import Swal from 'sweetalert2';
import './Registro.css'; // Importa el archivo CSS

const Registro = ({ toggleForm }) =>  {
    
  const handleSubmit = (e) => {
    e.preventDefault();
   
    const nombres = document.getElementById("nombres").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const carrera = document.getElementById("carrera").value;
    const facultad = document.getElementById("facultad").value;
  
    if (!nombres.trim()) {
      Swal.fire({
        title: 'Error',
        text: 'El campo "Nombres y Apellidos" no puede estar en blanco',
        icon: 'error',
        position: 'top-end',
        toast: true,
        showConfirmButton: false,
        timer: 3000,
      });
      return; // Detener la función si la validación falla
    }
  
    if (!telefono.match(/^\d{10}$/)) {
      Swal.fire({
        title: 'Error',
        text: 'El número de teléfono debe tener 10 dígitos',
        icon: 'error',
        position: 'top-end',
        toast: true,
        showConfirmButton: false,
        timer: 3000,
      });
      return;
    }
  
    if (!email.trim()) {
      Swal.fire({
        title: 'Error',
        text: 'El campo "Correo Electrónico" no puede estar en blanco',
        icon: 'error',
        position: 'top-end',
        toast: true,
        showConfirmButton: false,
        timer: 3000,
      });
      return;
    }
  
    if (!carrera.trim()) {
      Swal.fire({
        title: 'Error',
        text: 'El campo "Carrera Universitaria" no puede estar en blanco',
        icon: 'error',
        position: 'top-end',
        toast: true,
        showConfirmButton: false,
        timer: 3000,
      });
      return;
    }
  
    if (!facultad.trim()) {
      Swal.fire({
        title: 'Error',
        text: 'El campo "Facultad" no puede estar en blanco',
        icon: 'error',
        position: 'top-end',
        toast: true,
        showConfirmButton: false,
        timer: 3000,
      });
      return;
    }
  
  };
  

  return (
    <div className="container">
      <form id="registroForm" onSubmit={handleSubmit}>
        <div className="title">Registro de Estudiante</div>

        <div className="input-box">
          <label htmlFor="nombres">Nombres y Apellidos:</label>
          <input type="text" id="nombres" placeholder="Ingrese sus nombres" name="nombres" required />
          <div className="underline"></div>
        </div>

        <div className="input-box">
          <label htmlFor="telefono">Número de Teléfono:</label>
          <input type="number" id="telefono" placeholder="Ingrese su número de teléfono" name="telefono" required />
          <div className="underline"></div>
        </div>

        <div className="input-box">
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" placeholder="Ingrese su correo electrónico" name="email" required />
          <div className="underline"></div>
        </div>

        <div className="input-box">
          <label htmlFor="carrera">Carrera Universitaria:</label>
          <input type="text" id="carrera" placeholder="Ingrese su Carrera Universitaria" name="carrera" required />
          <div className="underline"></div>
        </div>

        <div className="input-box">
          <label htmlFor="facultad">Facultad:</label>
          <input type="text" id="facultad" placeholder="Ingrese su Facultad" name="facultad" required />
          <div className="underline"></div>
        </div>

        <div className="row mt-4">
          <div className="form-group col-md-4">
            <label htmlFor="servicios">Servicios:</label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Selecciona una opción</option>
              <option value="1">Beca</option>
              <option value="2">Ayuda Psicológica</option>
              <option value="3">Refuerzo Académico</option>
              <option value="4">Servicios de Salud</option>
            </select>
          </div>
        </div>

        <div className="row mt-4">
          <div className="form-group col-md-4">
            <label htmlFor="servicios">Servicios:</label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Selecciona una opción</option>
              <option value="1">Beca</option>
              <option value="2">Ayuda Psicológica</option>
              <option value="3">Refuerzo Académico</option>
              <option value="4">Servicios de Salud</option>
            </select>
          </div>
        </div>

        <div className="input-box button">
          <input type="submit" value="Registrar" />
        </div>

        <div className="login-message">
          <p>¿Ya tienes cuenta? <strong onClick={toggleForm}>Inicia sesión.</strong></p>
        </div>

      </form>
    </div>
  );
};

export default Registro;

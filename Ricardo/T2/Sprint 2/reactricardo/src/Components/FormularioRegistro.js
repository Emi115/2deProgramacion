import React, { Component } from 'react';
import './FormularioRegistro.css'; // Importa el archivo de estilos

class FormularioRegistro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      usernameError: '',
      emailError: '',
      passwordError: '',
    };
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }

  validateForm = () => {
    let usernameError = '';
    let emailError = '';
    let passwordError = '';

    // Validar nombre de usuario
    if (this.state.username.length < 3) {
      usernameError = 'El nombre de usuario debe tener al menos 3 caracteres';
    }

    // Validar correo electrónico
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!this.state.email.match(emailPattern)) {
      emailError = 'Correo electrónico inválido';
    }

    // Validar contraseña
    if (this.state.password.length < 6) {
      passwordError = 'La contraseña debe tener al menos 6 caracteres';
    }

    this.setState({ usernameError, emailError, passwordError });

    if (usernameError || emailError || passwordError) {
      return false;
    }

    return true;
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const isValid = this.validateForm();

    if (isValid) {
      // Realizar acción de registro o enviar datos
      console.log('Datos válidos:', this.state);
    }
  }

  render() {
    return (
      <div className="FormularioRegistro">
        <h2>Formulario de Registro</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Nombre de Usuario:</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUsernameChange}
              className={this.state.usernameError ? 'error' : ''}
            />
            <div className="error-message">{this.state.usernameError}</div>
          </div>

          <div>
            <label>Correo Electrónico:</label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleEmailChange}
              className={this.state.emailError ? 'error' : ''}
            />
            <div className="error-message">{this.state.emailError}</div>
          </div>

          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              className={this.state.passwordError ? 'error' : ''}
            />
            <div className="error-message">{this.state.passwordError}</div>
          </div>

          <button type="submit">Registrarse</button>
        </form>
      </div>
    );
  }
}

export default FormularioRegistro;

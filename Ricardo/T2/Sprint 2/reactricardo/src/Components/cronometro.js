import React, { Component } from "react";
import "./Cronometro.css"; // Importar el archivo de estilo

class Cronometro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiempo: 0,
      activo: false,
    };
    this.intervalo = null;
  }

  actualizarEstiloFondo = (estado) => {
    const cronometroContainer = document.querySelector(".CronometroContainer");
    switch (estado) {
      case "iniciar":
        cronometroContainer.style.animation =
          "cambiarFondo 60s infinite linear";
        break;
      case "pausar":
        cronometroContainer.style.animationPlayState = "paused";
        break;
      case "reiniciar":
        cronometroContainer.style.animation = "none";
        cronometroContainer.style.backgroundColor = "";
        break;
      default:
      // No action
    }
  };

  iniciarCronometro = () => {
    if (!this.state.activo) {
      this.intervalo = setInterval(() => {
        this.setState((prevState) => ({
          tiempo: prevState.tiempo + 0.1, // Incrementar en décimas de segundo
          activo: true,
        }));
      }, 100);
      this.actualizarEstiloFondo(true);
    }
  };

  pausarCronometro = () => {
    clearInterval(this.intervalo);
    this.setState({
      activo: false,
    });
    this.actualizarEstiloFondo(false);
  };

  reiniciarCronometro = () => {
    clearInterval(this.intervalo);
    this.setState({
      tiempo: 0,
      activo: false,
    });
    this.actualizarEstiloFondo(false);
    document.querySelector(".CronometroContainer").style.backgroundColor = "";
  };

  componentWillUnmount() {
    clearInterval(this.intervalo);
  }

  render() {
    const { tiempo, activo } = this.state;
    const horas = Math.floor(tiempo / 3600);
    const minutos = Math.floor((tiempo % 3600) / 60);
    const segundos = Math.floor(tiempo % 60);
    const decimas = (tiempo % 1).toFixed(1).slice(2);

    return (
      <div className="CronometroContainer">
        <h2 className="CronometroTitle">Cronómetro</h2>
        <div className="CronometroDisplay">
          {`${horas.toString().padStart(2, "0")}h ${minutos
            .toString()
            .padStart(2, "0")}m ${segundos
            .toString()
            .padStart(2, "0")}s ${decimas.toString().padStart(1, "0")}ds`}
        </div>
        <div className="CronometroButtons">
          <button
            className="CronometroButton"
            onClick={this.iniciarCronometro}
            disabled={activo}
          >
            Iniciar
          </button>
          <button
            className="CronometroButton"
            onClick={this.pausarCronometro}
            disabled={!activo}
          >
            Pausar
          </button>
          <button
            className="CronometroButton"
            onClick={this.reiniciarCronometro}
          >
            Reiniciar
          </button>
        </div>
      </div>
    );
  }
}

export default Cronometro;

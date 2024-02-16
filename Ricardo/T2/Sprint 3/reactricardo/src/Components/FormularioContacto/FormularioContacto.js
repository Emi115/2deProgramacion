import React from "react";
import { useForm } from "react-hook-form";
import "./FormularioContacto.module.css"; // Asegúrate de que la ruta de importación sea correcta

const FormularioContacto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert("Formulario enviado con éxito: " + JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="formulario-contacto">
      <div>
        <label>Nombre:</label>
        <input
          {...register("nombre", { required: "El nombre es obligatorio" })}
        />
        {errors.nombre && <span>{errors.nombre.message}</span>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          {...register("email", {
            required: "El email es obligatorio",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "El formato del email es inválido",
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label>Mensaje:</label>
        <textarea
          {...register("mensaje", { required: "El mensaje es obligatorio" })}
        />
        {errors.mensaje && <span>{errors.mensaje.message}</span>}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioContacto;

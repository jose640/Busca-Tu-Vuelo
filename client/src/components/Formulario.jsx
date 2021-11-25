import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { useForm } from "react-hook-form";

export const Formulario = ({ estado, date, cerrar }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [envioForm, setEnvioForm] = useState([]);

  const [mens, setMens] = useState(false);

  setTimeout(() => {
    setMens(false);
  }, 5000);

  const enviar = (data, e) => {
    setEnvioForm([...envioForm, data]);
    e.target.reset();
    setMens(true);
  };

  console.log(envioForm);

  return (
    <>
      <Modal isOpen={estado}>
        <button onClick={() => cerrar()}>X</button>
        <ModalHeader className="cabecera">
          Bienvenido a la Aereolinea {date.airline_name}.
        </ModalHeader>

        <ModalBody className="cuerpo">
          <form onSubmit={handleSubmit(enviar)}>
            <label htmlFor="Nombre_completo">Nombre: </label>

            <input
              type="text"
              placeholder="Ingrese nombre completo"
              className="form-control my-2"
              {...register("nombre", {
                required: { value: true, message: "Campo obligatorio" },
                minLength: { value: 2, message: "Minimo 2 letras" },
              })}
            />
            {errors.nombre && (
              <span className="text-danger text-small d-block md-2">
                {errors.nombre.message}
              </span>
            )}

            <label>Email: </label>

            <input
              type="email"
              placeholder="Ej: @gmail.com"
              className="form-control my-2"
              {...register("email", {
                required: { value: true, message: "Campo obligatorio" },
              })}
            />
            {errors.email && (
              <span className="text-danger text-small d-block md-2">
                {errors.email.message}
              </span>
            )}

            <label>Celular: </label>

            <input
              type="tel"
              placeholder="Ej: 0000000000"
              className="form-control my-2"
              pattern="[0-9]{10}"
              {...register("celular", {
                required: { value: true, message: "Campo obligatorio" },
              })}
            />
            {errors.celular && (
              <span className="text-danger text-small d-block md-2">
                {errors.celular.message}
              </span>
            )}

            <label>Edad: </label>

            <input
              type="number"
              placeholder="Ingrese su Edad"
              className="form-control my-2"
              min="18"
              max="100"
              {...register("edad", {
                required: { value: true, message: "Campo obligatorio" },
              })}
            />
            {errors.edad && (
              <span className="text-danger text-small d-block md-2">
                {errors.edad.message}
              </span>
            )}

            <div className="d-flex flex-row-reverse">
              <button className="btn btn-primary">Enviar</button>
            </div>
          </form>
        </ModalBody>
      </Modal>

      <Modal isOpen={mens}>
        <ModalHeader>
          <h5>Envio exitoso!</h5>
        </ModalHeader>

        <ModalBody>
          <div>
            <p>
              Tu información fue enviada con éxito, estaremos en contacto
              contigo.
            </p>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

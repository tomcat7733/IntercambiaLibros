<main className="pt-5 mt-3">
  {/*  GRID  */}
  <div className="container-fluid mt-5">
    <div className="row">
      <div className="col-2">
        {/* SIDE NAV */}
        <ul className="nav flex-column">
          <li className="nav-item">
            <a
              className="nav-link active text-body-secondary py-1"
              aria-current="page"
              href="#"
            >
              Mis datos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-body-secondary py-1" href="#">
              Mensajes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-body-secondary py-1" href="#">
              Opiniones
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-body-secondary py-1" href="#">
              Mis libros
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-body-secondary py-1" href="#">
              Transacciones
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-body-secondary py-1" href="#">
              Lista de deseados
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-body-secondary py-1" href="#">
              Sistema de reporte
            </a>
          </li>
        </ul>
      </div>
      <div className="col-10">
        {/* FORMULARIO */}
        <h4>Mis datos</h4>
        <form style={{ maxWidth: "80%" }}>
          <div className="form-floating my-3">
            <input
              type="text"
              className="form-control"
              id="floatingInputNombre"
              placeholder="Nombre Completo"
            />
            <label htmlFor="floatingInputNombre">Nombre Completo</label>
          </div>
          <div className="form-floating my-3">
            <input
              type="text"
              className="form-control"
              id="floatingApellidos"
              placeholder="Apellidos"
            />
            <label htmlFor="floatingApellidos">Apellidos</label>
          </div>
          <div className="form-floating my-3">
            <input
              type="email"
              className="form-control"
              id="floatingEmail"
              placeholder="Email"
            />
            <label htmlFor="floatingEmail">Email</label>
          </div>
          <div className="form-floating my-3">
            <input
              type="number"
              className="form-control"
              id="floatingPhone"
              placeholder="Telefono"
            />
            <label htmlFor="floatingPhone">Telefono</label>
          </div>
          <div className="form-floating my-3">
            <input
              type="text"
              className="form-control"
              id="floatingCiudad"
              placeholder="Ubicación"
            />
            <label htmlFor="floatingCiudad">Ciudad &amp; Poblacion</label>
          </div>
          <div className="form-floating my-3">
            <input
              type="text"
              className="form-control"
              id="floatingInputDescripcion"
              placeholder="Titulo"
            />
            <label htmlFor="floatingInputDescripcion">
              Información sobre ti
            </label>
          </div>
          <div className="d-flex justify-content-between gap-3 mt-3">
            <button
              className="btn btn-outline-secondary"
              style={{ minWidth: "45%" }}
            >
              Cancelar
            </button>
            <button
              className="btn btn-primary"
              type="submit"
              style={{ minWidth: "45%" }}
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</main>

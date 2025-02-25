<div className="container-fluid mt-5">
  <div className="row">
    <div className="col-2">
      {/* SIDE NAV */}
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active text-body-secondary py-1" aria-current="page" href="#">
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
      <h4>Subir Libro</h4>
      <form style={{ maxWidth: '80%' }}>
        <div className="form-floating my-3">
          <input type="text" className="form-control" id="floatingInputTitle" placeholder="Titulo" />
          <label htmlFor="floatingInputTitle">Titulo del libro</label>
        </div>
        <div className="form-floating my-3">
          <input type="text" className="form-control" id="floatingAutor" placeholder="Autor" />
          <label htmlFor="floatingAutor">Autor</label>
        </div>
        <div className="form-floating my-3">
          <input type="text" className="form-control" id="floatingEditorial" placeholder="Editorial" />
          <label htmlFor="floatingEditorial">Editorial</label>
        </div>
        <div className="form-floating my-3">
          <input type="number" className="form-control" id="floatingisbn" placeholder="ISBN" />
          <label htmlFor="floatingIsbn">ISBN</label>
        </div>
        <div className="form-floating my-3">
          <input type="text" className="form-control" id="floatingUbi" placeholder="Ubicación" />
          <label htmlFor="floatingUbi">Ubicación</label>
        </div>
        <div className="form-floating my-3">
          <select className="form-select py-0" aria-label="Default select example">
            <option selected="" disabled="">
              Estado del libro
            </option>
            <option value={1}>Nuevo</option>
            <option value={2}>Seminuevo</option>
            <option value={3}>Aceptable</option>
            <option value={4}>Deteriorado</option>
          </select>
        </div>
        <div className="form-floating my-3">
          <select className="form-select py-0" aria-label="Default select example">
            <option selected="" disabled="">
              Metodo de intercambio
            </option>
            <option value={1}>Presencial</option>
            <option value={2}>Intercambio Online</option>
          </select>
          <div className="form-floating my-3">
            <select className="form-select py-0" aria-label="Default select example">
              <option selected="" disabled="">
                Intercambio / Donacion
              </option>
              <option value={1}>Intercambio</option>
              <option value={2}>Donación</option>
            </select>
          </div>
          <div className="form-floating my-3">
            <input type="file" className="form-control" id="archivoInput" accept=".pdf,.jpg,.png" />
            <label htmlFor="archivoInput">Subir archivo</label>
          </div>
          <div className="form-floating my-3">
            <input type="text" className="form-control" id="floatingInputDescripcion" placeholder="Titulo" />
            <label htmlFor="floatingInputDescripcion">Descripción del libro</label>
          </div>
          <div className="d-flex justify-content-between gap-3 mt-3">
            <button className="btn btn-outline-secondary" style={{ minWidth: '45%' }}>
              Cancelar
            </button>
            <button className="btn btn-primary" type="submit" style={{ minWidth: '45%' }}>
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>;

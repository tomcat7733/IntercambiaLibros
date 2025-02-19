<nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a
            className="nav-link"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="../../public/assets/icons/list.svg"
              alt="iconoMenu"
              width={35}
              height={25}
            />
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Generos
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Donaciones
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            IntercambiaLibros
          </a>
        </li>
      </ul>
      {/* Barra de busqueda */}
      <div className="d-flex justify-content-center w-100">
        <form
          className="d-flex"
          role="search"
          style={{ maxWidth: 500, width: "100%" }}
        >
          <div className="input-group">
            <input
              type="search"
              className="form-control"
              placeholder="Buscar"
              aria-label="Buscar"
            />
            <button className="btn btn-outline-secondary" type="submit">
              <img
                src="/public/assets/icons/search.svg"
                alt="iconoBusqueda"
                width={20}
                height={20}
              />
            </button>
          </div>
        </form>
      </div>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a
            className="nav-link d-flex align-items-center gap-2 text-nowrap px-2"
            href="#"
          >
            <img
              src="/public/assets/icons/cloud-upload.svg"
              alt="iconoSubirLibro"
              with={18}
              height={18}
            />
            Subir Libro
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link d-flex align-items-center gap-2 text-nowrap px-2"
            href="#"
          >
            <img
              src="/public/assets/icons/person-fill.svg"
              alt="iconoCuenta"
              with={18}
              height={18}
            />
            Mi Cuenta
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link d-flex align-items-center gap-2 text-nowrap ps-2"
            href="#"
          >
            <img
              src="/public/assets/icons/bell.svg"
              alt="iconoNotificacion"
              with={18}
              height={18}
            />
            Notificacion
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

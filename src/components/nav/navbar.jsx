'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg fixed-top pb-3">
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
                    href="javascript:void(0)"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <Image src="/assets/icons/list.svg" alt="iconoMenu" width={35} height={25} />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="javascript:void(0)">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0)">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0)">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href="/">
                    IntercambiaLibros
                  </Link>
                </li>
              </ul>
              {/* Barra de busqueda */}
              <div className="d-flex justify-content-center w-100 mx-lg-3">
                <form className="d-flex" role="search" style={{ maxWidth: 500, width: '100%' }}>
                  <div className="input-group">
                    <input type="search" className="form-control" placeholder="Buscar" aria-label="Buscar" />
                    <button className="btn btn-outline-secondary" type="submit">
                      <Image src="/assets/icons/search.svg" alt="iconoBusqueda" width={20} height={20} />
                    </button>
                  </div>
                </form>
              </div>
              {/* Menú de la derecha */}
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link d-flex align-items-center gap-2 text-nowrap px-2" href="views/subirLibro">
                    <Image src="/assets/icons/cloud-upload.svg" alt="iconoSubirLibro" width={18} height={18} />
                    <span className="d-lg-inline">Subir Libro</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link d-flex align-items-center gap-2 text-nowrap px-2"
                    data-bs-toggle="modal"
                    data-bs-target="#modalIniciarSesion"
                    href="javascript:void(0)"
                  >
                    <Image src="/assets/icons/person-fill.svg" alt="iconoCuenta" width={18} height={18} />
                    <span className=" d-lg-inline">Iniciar sesión</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link d-flex align-items-center gap-2 text-nowrap ps-2" href="/views/perfil">
                    <Image src="/assets/icons/bell.svg" alt="iconoNotificacion" width={18} height={18} />
                    <span className="d-lg-inline">Notificacion</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* Modales renderizados siempre */}
      <LoginModal />
      <RegistroModal />
    </>
  );
}
export function LoginModal() {
  return (
    <div
      className="modal fade"
      id="modalIniciarSesion"
      tabIndex={-1}
      aria-labelledby="modalIniciarSesion"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body p-0">
            <section className="h-100 gradient-form rounded-bottom" style={{ backgroundColor: '#eee' }}>
              <div className="row d-flex justify-content-center align-items-center h-100 ">
                <div className="card-body px-md-5 pb-md-5 pt-md-3 mx-md-4 rounded">
                  <div className="text-center">
                    <Image src="/assets/img/lotus.png" width={185} height={185} alt="logo" />
                    <h4 className="mt-1 mb-5 pb-1">IntercambiaLibros</h4>
                  </div>
                  <form>
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                      <label htmlFor="floatingInput">Usuario</label>
                    </div>
                    <div className="form-floating">
                      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                      <label htmlFor="floatingPassword">Contraseña</label>
                    </div>
                    <div className="text-center mt-4 pb-2 d-flex justify-content-between">
                      <button className="btn btn-outline-primary" style={{ width: '80%' }} type="submit">
                        Iniciar Sesión
                      </button>
                      <a className="text-muted" href="#!">
                        ¿Olvidaste la contraseña?
                      </a>
                    </div>
                    <div className="d-flex align-items-center justify-content-center m-3 gap-3">
                      <p className="mb-0 me-2">¿No tienes una cuenta?</p>
                      <button
                        type="button"
                        style={{ width: '40%' }}
                        className="btn btn-outline-danger border-0 py-0"
                        data-bs-target="#modalRegistro"
                        data-bs-toggle="modal"
                      >
                        Registrate
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RegistroModal() {
  return (
    <div className="modal fade" id="modalRegistro" tabIndex={-1} aria-labelledby="modalRegistro" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body p-0">
            <section className="h-100 gradient-form rounded-bottom" style={{ backgroundColor: '#eee' }}>
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="card-body px-md-5 pb-md-5 pt-md-3 mx-md-4">
                  <div className="d-flex flex-column justify-content-center align-items-center text-center my-2 pb-4 ">
                    <h4 className="mb-0">Crear cuenta</h4>
                    <Image src="/assets/img/lotus.png" width={120} height={120} alt="logo" />
                  </div>
                  <form>
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                      <label htmlFor="floatingInput">Nombre de usuario</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" id="floatingPassword" placeholder="Email" />
                      <label htmlFor="floatingPassword">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                      <label htmlFor="floatingPassword">Contraseña</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                      <label htmlFor="floatingPassword">Repetir Contraseña</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckTerminos" required />
                      <label className="form-check-label" htmlFor="flexCheckTerminos">
                        <span>
                          He leído y acepto la &nbsp;
                          <a href="#">política de privacidad</a>
                        </span>
                      </label>
                    </div>
                    <div className="text-center mt-4 pb-2 d-flex justify-content-between">
                      <button className="btn btn-outline-primary w-100" type="submit">
                        Crear cuenta
                      </button>
                    </div>
                    <div className="d-flex align-items-center justify-content-center m-3 gap-3">
                      <div className="d-flex align-items-center w-100">
                        <div className="flex-grow-1 border-top" />
                        <span className="px-3 mb-0">Ya tengo una cuenta</span>
                        <div className="flex-grow-1 border-top" />
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn btn-outline-danger w-100"
                        data-bs-target="#modalIniciarSesion"
                        data-bs-toggle="modal"
                      >
                        Iniciar sesión
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

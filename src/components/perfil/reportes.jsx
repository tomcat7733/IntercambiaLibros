'use client';
import SideBar from '@components/perfil/sideBar';
import Image from 'next/image';

export default function Reportes() {
  return (
    <div className="container-fluid">
      <div className="row g-0">
        {/* Sidebar */}
        <div className="col-12 col-lg-2 ps-0">
          <SideBar />
        </div>

        {/* Contenido principal */}
        <div className="col-12 col-lg-10">
          <div className="row gx-lg-5">
            {/* Sección de imagen para móvil */}
            <div className="col-12 col-xl-7 order-0 order-xl-1 mb-4 mb-xl-0">
              <div className="d-flex justify-content-center align-items-start h-100 ps-xl-4">
                <Image
                  src="/assets/img/img_report.png"
                  alt="Imagen de un simbolo de reporte"
                  className="img-fluid rounded"
                  width={750}
                  height={400}
                />
              </div>
            </div>

            {/* Sección de contenido y formulario */}
            <div className="col-12 col-xl-5 order-1 order-xl-0">
              <h2>Sistema de reporte & Contacto</h2>
              <p className="text-secondary fs-5">Instrucciones para el sistema de reporte</p>
              <p>
                En nuestra página, queremos garantizar un ambiente seguro y agradable para todos los usuarios. Sigue
                estas instrucciones para utilizarlo correctamente:
              </p>
              <ol>
                <li>
                  <p>
                    Identifica el problema: Si encuentras un libro, usuario o contenido que infrinja nuestras normas o
                    sea inapropiado, puedes reportarlo.
                  </p>
                </li>
                <li>
                  <p>
                    Selecciona la categoría del reporte: Indica la razón del reporte seleccionando una de las opciones
                    disponibles, como:
                  </p>
                  <ul>
                    <li>Contenido inapropiado</li>
                    <li>Información falsa o engañosa</li>
                    <li>Actividad sospechosa</li>
                    <li>Otros (con posibilidad de detallar el problema)</li>
                  </ul>
                </li>
                <li>
                  <p className="mt-2">Envía el reporte: Haz clic en "Enviar" para que nuestro equipo revise el caso.</p>
                </li>
                <li>
                  <p>
                    Seguimiento: Nuestro equipo de moderación revisará el reporte y tomará las medidas necesarias.
                    Podrás recibir una notificación si se requiere más información o si se toma una acción basada en tu
                    reporte.
                  </p>
                </li>
              </ol>
              <p>
                Confidencialidad garantizada: Tus reportes son anónimos, y no compartiremos tu identidad con la persona
                reportada.
              </p>

              {/* Formulario */}
              <h4 className="mt-5">Contacto</h4>
              <form className="row g-3 mb-5 mt-2">
                <div className="form-floating col-md-6">
                  <input type="text" className="form-control" id="floatingInputNombre" placeholder="Nombre" />
                  <label htmlFor="floatingInputNombre">Nombre</label>
                </div>
                <div className="form-floating col-md-6">
                  <input type="text" className="form-control" id="floatingApellidos" placeholder="Apellidos" />
                  <label htmlFor="floatingApellidos">Apellidos</label>
                </div>
                <div className="form-floating col-12">
                  <input type="email" className="form-control" id="floatingEmail" placeholder="Email" />
                  <label htmlFor="floatingEmail">Email</label>
                </div>
                <div className="form-floating col-12">
                  <input type="text" className="form-control" id="floatingReason" placeholder="Motivo" />
                  <label htmlFor="floatingReason">Título del mensaje</label>
                </div>
                <div className="form-floating col-12 my-3">
                  <textarea
                    className="form-control"
                    id="floatingInputDescripcion"
                    placeholder="Mensaje"
                    style={{ height: '100px' }}
                  />
                  <label htmlFor="floatingInputDescripcion">Mensaje</label>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Acepto los términos y condiciones
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

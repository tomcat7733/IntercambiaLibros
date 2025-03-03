'use client';
import SideBar from '@components/perfil/sideBar';
import Image from 'next/image';

export default function Reportes() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 ps-0">
          {/* SIDE NAV */}
          <SideBar />
        </div>
        <div className="col-4">
          {/* SISTEMA DE REPORTE */}
          <h2>Sistema de reporte</h2>
          <p className="text-secondary fs-5">Instrucciones para el sistema de reporte</p>
          <p>
            En nuestra página, queremos garantizar un ambiente seguro y agradable para todos los usuarios. Sigue estas
            instrucciones para utilizarlo correctamente:
          </p>
          <ol>
            <li>
              <p>
                Identifica el problema: Si encuentras un libro, usuario o contenido que infrinja nuestras normas o sea
                inapropiado, puedes reportarlo.
              </p>
            </li>
            <li>
              <p>
                Selecciona la categoría del reporte: Indica la razón del reporte seleccionando una de las opciones
                disponibles, como:
              </p>
              <ul>
                <p></p>
                <li>Contenido inapropiado</li>
                <li>Información falsa o engañosa</li>
                <li>Actividad sospechosa</li>
                <li>Otros (con posibilidad de detallar el problema).</li>
                <p />
              </ul>
            </li>
            <li>
              <p>Envía el reporte: Haz clic en "Enviar" para que nuestro equipo revise el caso.</p>
            </li>
            <li>
              <p>
                Seguimiento: Nuestro equipo de moderación revisará el reporte y tomará las medidas necesarias. Podrás
                recibir una notificación si se requiere más información o si se toma una acción basada en tu reporte.
              </p>
            </li>
          </ol>
          <p>
            Confidencialidad garantizada: Tus reportes son anónimos, y no compartiremos tu identidad con la persona
            reportada.
          </p>
          {/* FORMULARIO */}
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
            <div className="form-floating col-12 my-3">
              <input type="text" className="form-control" id="floatingInputDescripcion" placeholder="Mensaje" />
              <label htmlFor="floatingInputDescripcion">Mensaje</label>
            </div>
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label" htmlFor="gridCheck">
                  Acepto los terminos y condiciones
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
        <div className="col-6 d-flex justify-content-center align-items-start" style={{ minHeight: 300 }}>
          <Image src="/assets/img/reporte.png" alt="Imagen de un simbolo de reporte" className="img-fluid w-75" />
        </div>
      </div>
    </div>
  );
}

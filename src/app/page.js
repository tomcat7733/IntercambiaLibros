import CarouselDoble from '../components/carousel/carouselDouble';
import CarouselSimple from '../components/carousel/carouselSimple';
import Opiniones from '../components/opiniones/opiniones';
import './page.css';


export default function Home() {
  return (
    <>
      <main className="container-fluid">
        <CarouselDoble />
        <CarouselSimple />
        <div className="container-fluid m-5 bs-ascent">
          <div className="container text-center">
            <div className="row my-4 mb-1">
              <div className="col-5">
                <h3>Gracias por leer</h3>
                <p className="text-start lh-1 pt-3 fw-bold fst-italic">Ventajas de leer</p>
                <p className="text-start fw-light lh-1">
                  <span className="fw-medium">Desarrollo personal:</span>
                  fomenta la imaginación, la creatividad y el pensamiento crítico.
                </p>
                <p className="text-start fw-light lh-1">
                  <span className="fw-medium">Conocimiento:</span>
                  amplía la perspectiva y enriquece el vocabulario.
                </p>
                <p className="text-start fw-light lh-1">
                  <span className="fw-medium">Reducción del estrés:</span>
                  leer ayuda a desconectar y relajarse.
                </p>
                <p className="text-start lh-1 pt-3 fw-bold fst-italic">Ventajas de utilizar IntercambiaLibros</p>
                <p className="text-start fw-light lh-1">
                  <span className="fw-medium">Ahorro económico:</span>
                  acceso a libros de calidad a precios reducidos o mediante intercambios.
                </p>
                <p className="text-start fw-light lh-1">
                  <span className="fw-medium">Sostenibilidad:</span>
                  fomenta la reutilización, reduciendo el desperdicio
                </p>
                <p className="text-start fw-light lh-1">
                  <span className="fw-medium">Comunidad:</span>
                  conecta a amantes de los libros para compartir recomendaciones y experiencias.
                </p>
              </div>
              <div className="col-7 pe-0">
                <img
                  src="/assets/img/cerebro_lectura_fm_mundo.jpg"
                  className="rounded"
                  alt="imagen de un libro y un cerebro"
                  style={{ width: '32rem', height: '25rem' }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="text-start lh-1 fw-bold fst-italic">Quienes somos</p>
                <p className="text-start fw-light lh-1">
                  Somos una plataforma creada por y para los amantes de los libros. Creemos en la magia de compartir
                  historias y en el impacto positivo de reutilizar libros.
                  <br />
                  Nuestro objetivo es ofrecer un espacio donde las personas puedan intercambiar libros fácilmente,
                  promoviendo la sostenibilidad y el acceso al conocimiento. Buscamos construir una comunidad unida por
                  el amor a la lectura y el deseo de marcar la diferencia.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Opiniones />
      </main>
    </>
  );
}

"use client";

export default function CarouselDoble() {
  return (
    <div className="container-fluid">
      <div id="carouselDonations" className="carousel slide" data-bs-ride="carousel">
        {/* AÑADIR PARA QUE FUNCIONE EL CAROUSEL + PONER TIEMPO data-bs-ride="carousel"*/}
        {/* Mantiene el ancho completo */}
        <h4 className="border-bottom m-4 pt-3 pb-2" style={{ paddingLeft: '6rem' }}>
          ULTIMAS DONACIONES
        </h4>
        <div className="carousel-inner">
          {/* Primera diapositiva con tarjetas */}
          <div className="carousel-item active p-3">
            {/* data-bs-interval="7000" */}
            <div className="row justify-content-center">
              {/* Card 1 */}
              <div className="col-md-2 col-sm-4 col-6">
                <div className="card" style={{ height: '14rem' }}>
                  <img
                    src="/assets/img/p1.jpg"
                    className="card-img-top"
                    alt="Imagen de Terror"
                    style={{ height: 190, objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-center p-0">
                    <a href="#" className="btn btn-outline-light border-0">
                      TERROR
                    </a>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="col-md-2 col-sm-4 col-6">
                <div className="card" style={{ height: '14rem' }}>
                  <img
                    src="/assets/img/p2.jpg"
                    className="card-img-top"
                    alt="Imagen de ficción"
                    style={{ height: 190, objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-center p-0">
                    <a href="#" className="btn btn-outline-light border-0 w-100 text-center text-nowrap">
                      CIENCIA FICCIÓN
                    </a>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="col-md-2 col-sm-4 col-6">
                <div className="card" style={{ height: '14rem' }}>
                  <img
                    src="/assets/img/p3.jpg"
                    className="card-img-top"
                    alt="Imagen de Romance"
                    style={{ height: 190, objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-center p-0">
                    <a href="#" className="btn btn-outline-light border-0">
                      ROMANCE
                    </a>
                  </div>
                </div>
              </div>
              {/* Card 4 */}
              <div className="col-md-2 col-sm-4 col-6">
                <div className="card" style={{ height: '14rem' }}>
                  <img
                    src="/assets/img/p4.jpg"
                    className="card-img-top"
                    alt="Imagen del Cosmos"
                    style={{ height: 190, objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-center p-0">
                    <a href="#" className="btn btn-outline-light border-0">
                      COSMOS
                    </a>
                  </div>
                </div>
              </div>
              {/* Card 5 */}
              <div className="col-md-2 col-sm-4 col-6">
                <div className="card" style={{ height: '14rem' }}>
                  <img
                    src="/assets/img/p5.jpg"
                    className="card-img-top"
                    alt="..."
                    style={{ height: 190, objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-center p-0">
                    <a href="#" className="btn btn-outline-light border-0">
                      AVENTURA
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              {/* Card 6 */}
              <div className="col-md-2 col-sm-4 col-6">
                <div className="card" style={{ height: '14rem' }}>
                  <img
                    src="/assets/img/p1.jpg"
                    className="card-img-top"
                    alt="Imagen de Terror"
                    style={{ height: 190, objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-center p-0">
                    <a href="#" className="btn btn-outline-light border-0">
                      TERROR
                    </a>
                  </div>
                </div>
              </div>
              {/* Card 7 */}
              <div className="col-md-2 col-sm-4 col-6">
                <div className="card" style={{ height: '14rem' }}>
                  <img
                    src="/assets/img/p2.jpg"
                    className="card-img-top"
                    alt="Imagen de ficción"
                    style={{ height: 190, objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-center p-0">
                    <a href="#" className="btn btn-outline-light border-0 w-100 text-center text-nowrap">
                      CIENCIA FICCIÓN
                    </a>
                  </div>
                </div>
              </div>
              {/* Card 8 */}
              <div className="col-md-2 col-sm-4 col-6">
                <div className="card" style={{ height: '14rem' }}>
                  <img
                    src="/assets/img/p3.jpg"
                    className="card-img-top"
                    alt="Imagen de Romance"
                    style={{ height: 190, objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-center p-0">
                    <a href="#" className="btn btn-outline-light border-0">
                      ROMANCE
                    </a>
                  </div>
                </div>
              </div>
              {/* Card 9 */}
              <div className="col-md-2 col-sm-4 col-6">
                <div className="card" style={{ height: '14rem' }}>
                  <img
                    src="/assets/img/p4.jpg"
                    className="card-img-top"
                    alt="Imagen del Cosmos"
                    style={{ height: 190, objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-center p-0">
                    <a href="#" className="btn btn-outline-light border-0">
                      COSMOS
                    </a>
                  </div>
                </div>
              </div>
              {/* Card 10 */}
              <div className="col-md-2 col-sm-4 col-6">
                <div className="card" style={{ height: '14rem' }}>
                  <img
                    src="/assets/img/p5.jpg"
                    className="card-img-top"
                    alt="..."
                    style={{ height: 190, objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-center p-0">
                    <a href="#" className="btn btn-outline-light border-0">
                      AVENTURA
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Segunda diapositiva */}
          <div className="carousel-item p-3">
            {/* data-bs-interval="5000" */}
            <div className="row justify-content-center" data-bs-interval="5000">
              {/* Card 1 */}
              <div className="col-md-2 col-sm-4 col-6">
                <div className="card" style={{ height: '14rem' }}>
                  <img
                    src="/assets/img/p1.jpg"
                    className="card-img-top"
                    alt="Imagen de Terror"
                    style={{ height: 190, objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-center p-0">
                    <a href="#" className="btn btn-outline-light border-0">
                      TERROR
                    </a>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="col-md-2 col-sm-4 col-6">
                <div className="card" style={{ height: '14rem' }}>
                  <img
                    src="/assets/img/p2.jpg"
                    className="card-img-top"
                    alt="Imagen de ficción"
                    style={{ height: 190, objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-center p-0">
                    <a href="#" className="btn btn-outline-light border-0 w-100 text-center text-nowrap">
                      CIENCIA FICCIÓN
                    </a>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="col-md-2 col-sm-4 col-6">
                <div className="card" style={{ height: '14rem' }}>
                  <img
                    src="/assets/img/p3.jpg"
                    className="card-img-top"
                    alt="Imagen de Romance"
                    style={{ height: 190, objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-center p-0">
                    <a href="#" className="btn btn-outline-light border-0">
                      ROMANCE
                    </a>
                  </div>
                </div>
              </div>
              {/* Card 4 */}
              <div className="col-md-2 col-sm-4 col-6">
                <div className="card" style={{ height: '14rem' }}>
                  <img
                    src="/assets/img/p4.jpg"
                    className="card-img-top"
                    alt="Imagen del Cosmos"
                    style={{ height: 190, objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-center p-0">
                    <a href="#" className="btn btn-outline-light border-0">
                      COSMOS
                    </a>
                  </div>
                </div>
              </div>
              {/* Card 5 */}
              <div className="col-md-2 col-sm-4 col-6">
                <div className="card" style={{ height: '14rem' }}>
                  <img
                    src="/assets/img/p5.jpg"
                    className="card-img-top"
                    alt="..."
                    style={{ height: 190, objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-center p-0">
                    <a href="#" className="btn btn-outline-light border-0">
                      AVENTURA
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              {/* Card 6 */}
              <div className="col-md-2 col-sm-4 col-6">
                <div className="card" style={{ height: '14rem' }}>
                  <img
                    src="/assets/img/p1.jpg"
                    className="card-img-top"
                    alt="Imagen de Terror"
                    style={{ height: 190, objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-center p-0">
                    <a href="#" className="btn btn-outline-light border-0">
                      TERROR
                    </a>
                  </div>
                </div>
              </div>
              {/* Card 7 */}
              <div className="col-md-2 col-sm-4 col-6">
                <div className="card" style={{ height: '14rem' }}>
                  <img
                    src="/assets/img/p2.jpg"
                    className="card-img-top"
                    alt="Imagen de ficción"
                    style={{ height: 190, objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-center p-0">
                    <a href="#" className="btn btn-outline-light border-0 w-100 text-center text-nowrap">
                      CIENCIA FICCIÓN
                    </a>
                  </div>
                </div>
              </div>
              {/* Card 8 */}
              <div className="col-md-2 col-sm-4 col-6">
                <div className="card" style={{ height: '14rem' }}>
                  <img
                    src="/assets/img/p3.jpg"
                    className="card-img-top"
                    alt="Imagen de Romance"
                    style={{ height: 190, objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-center p-0">
                    <a href="#" className="btn btn-outline-light border-0">
                      ROMANCE
                    </a>
                  </div>
                </div>
              </div>
              {/* Card 9 */}
              <div className="col-md-2 col-sm-4 col-6">
                <div className="card" style={{ height: '14rem' }}>
                  <img
                    src="/assets/img/p4.jpg"
                    className="card-img-top"
                    alt="Imagen del Cosmos"
                    style={{ height: 190, objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-center p-0">
                    <a href="#" className="btn btn-outline-light border-0">
                      COSMOS
                    </a>
                  </div>
                </div>
              </div>
              {/* Card 10 */}
              <div className="col-md-2 col-sm-4 col-6">
                <div className="card" style={{ height: '14rem' }}>
                  <img
                    src="/assets/img/p5.jpg"
                    className="card-img-top"
                    alt="..."
                    style={{ height: 190, objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-center p-0">
                    <a href="#" className="btn btn-outline-light border-0">
                      AVENTURA
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Botones de navegación */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselDonations"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselDonations"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

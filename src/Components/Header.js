import React from "react";
import Typewriter from "typewriter-effect";

const Header = ({ data }) => {
  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var description = data.description;
    var city = data.address.city;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Inicio
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              ¿Quiénes somos?
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Tipos de Servicio
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Proyectos
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">
              Testimonios
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contacto
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            <Typewriter
              options={{
                strings: [
                  "Somos distribuidores de fábrica",
                  "Te brindamos el material que necesitas",
                ],
                deleteSpeed: 5,
                delay: 50,
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Escríbenos o llámanos")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2500)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
          </h1>
          <h3>
            Para toda la República desde {city}. <span>{occupation}</span>.{" "}
            {description}.
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;

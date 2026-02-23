import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    {/* El  es un Link que lleva a la página de inicio */}
                    <Link className="navbar-brand" to="/">
                        <img src="/frontend/assets/img/logo-entero.png" alt="RecycleWare logo" className="img-fluid w-50" />
                    </Link>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                {/* Catalogo es una ruta provisional hasta que pongamos la real*/}
                                <Link className="nav-link text-light" to="/catalogo">Catálogo</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-light" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false" style={{ cursor: "pointer" }}>
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/accion1">Action</Link></li>
                                    <li><Link className="dropdown-item" to="/accion2">Another action</Link></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><Link className="dropdown-item" to="/otra">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled text-light" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

            <section className="seccion-hero">
                <video className="video-fondo" autoPlay muted loop playsInline>
                    <source src="" type="video/webm" />
                </video>

                <div className="capa-oscura"></div>

                <div className="hero-contenido">
                    <span className="etiqueta-hero">♻️ Tecnología Sostenible</span>

                    <h1 className="titulo-hero">
                        Da una <span className="resaltado">segunda vida</span> <br /> a tu tecnología
                    </h1>

                    <p className="descripcion-hero">
                        No es basura, es una oportunidad. Gestionamos, reparamos y donamos
                        material informático para reducir la brecha digital y cuidar el planeta.
                    </p>

                    <div className="hero-acciones">
                        <a href="#donar" className="btn-donar">Donar Equipo</a>
                        <a href="#solicitar" className="btn-solicitar">Solicitar Equipo</a>
                    </div>
                </div>
            </section>
        </header>
    );
}

export default Header;
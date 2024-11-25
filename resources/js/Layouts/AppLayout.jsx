import React from "react";
import { Head } from "@inertiajs/inertia-react";

export default function AppLayout({ children, title }) {
    return (
        <div>
            <Head title={title} />

            <header className="bg-dark text-light py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>Mi Aplicación de Mapas</h1>
                        </div>
                        <div className="col-md-6 text-end">
                            {/* Puedes agregar elementos a la derecha del header, como un botón de login */}
                            <button className="btn btn-outline-light">
                                Iniciar Sesión
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        Mi Aplicación
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="#"
                                >
                                    Inicio
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Mapa
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Contacto
                                </a>
                            </li>
                        </ul>{" "}
                    </div>
                </div>
            </nav>

            <main>
                {children}{" "}
                {/* Aquí se renderizará el contenido de cada página */}
            </main>

            <footer>
                {/* Aquí va el contenido del footer */}
                <p>&copy; 2024 Mi Aplicación</p>
            </footer>
        </div>
    );
}

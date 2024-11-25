import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";

createInertiaApp({
    resolve: (name) => import(`./Pages/${name}`), // Cambia require por import
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});

InertiaProgress.init({
    // Puedes personalizar las opciones de la barra de progreso aquí
    color: "blue",
    showSpinner: true,
});

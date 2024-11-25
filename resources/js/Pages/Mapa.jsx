import React, { useEffect, useRef } from "react";
import AppLayout from "@/Layouts/AppLayout"; // Asegúrate de que la ruta sea correcta
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { useGeographic } from "ol/proj";

export default function Mapa(props) {
    const mapRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current) return;

        useGeographic();

        const map = new Map({
            target: mapRef.current,
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: [-96.7275, 17.0679], // Coordenadas aproximadas del centro de Oaxaca
                zoom: 8,
            }),
        });

        // Puedes agregar aquí más funcionalidades de OpenLayers en el futuro
        // ...

        return () => map.setTarget(undefined); // Limpiar el mapa al desmontar el componente
    }, []);

    return (
        <AppLayout title="Mapa de Oaxaca">
            <div
                ref={mapRef}
                className="map-container"
                style={{ width: "100%", height: "500px" }}
            />
        </AppLayout>
    );
}

<?php

namespace App\Http\Controllers;
use Inertia\Inertia; 
use Illuminate\Http\Request;

class MapaController extends Controller
{
    public function index()
    {
                return Inertia::render('Mapa'); // <-- 'Mapa' coincide con Mapa.jsx
    }
}

// Code React
// Fichier qui sert à faire le rendu (Il peut aussi gérer les URL dans l'intérieur de React)
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './index.css';


render(
    <App />,
    document.getElementById('root')
);
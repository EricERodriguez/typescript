"use strict";
(() => {
    const sumar = (a, b) => a + b;
    const nombre = () => 'Hola mundo';
    const obtenerSalario = () => {
        return new Promise((resolve, reject) => {
            resolve(`Fernando`);
        });
    };
    obtenerSalario().then(a => console.log(a.toUpperCase()));
})();

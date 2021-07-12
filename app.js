"use strict";
(() => {
    console.log(`inicio`);
    const prom1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`Se termino el timeout`);
        }, 1000);
    });
    prom1
        //resolucion
        .then(mensaje => console.log(mensaje))
        //si hay error
        .catch(err => console.warn(err));
    console.log(`Fin`);
})();

"use strict";
(function () {
    var avenger = {
        nombre: 'Steve',
        clave: 'Capitan america',
        poder: 'Drogas'
    };
    var extraer = function (avenger) {
        var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder;
        console.log(nombre);
        console.log(clave);
        console.log(poder);
    };
    extraer(avenger);
})();

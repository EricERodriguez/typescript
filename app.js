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
    // extraer (avenger);
    var avengers = ["Thor", "Ironman", "Spiderman"];
    var loki = avengers[0], hombre = avengers[1], arana = avengers[2];
    // console.log ( loki );
    // console.log ( hombre );
    // console.log ( arana );
    var extraerArr = function (_a) {
        var thor = _a[0], ironman = _a[1], spiderman = _a[2];
        console.log(thor);
        console.log(ironman);
        console.log(spiderman);
    };
    extraerArr(avengers);
})();

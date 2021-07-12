

( () => {

    const avenger = {
        nombre:    'Steve',
        clave:     'Capitan america',
        poder:     'Drogas'
    }


    const extraer = (avenger: any) => {
        const { nombre, clave, poder } = avenger;

        console.log(nombre);
        console.log(clave);
        console.log(poder);
    }

    // extraer (avenger);

    const avengers: string[] = [`Thor`, `Ironman`, `Spiderman`];

    const [loki, hombre, arana ] = avengers;

    // console.log ( loki );
    // console.log ( hombre );
    // console.log ( arana );
    
    const extraerArr = ( [thor, ironman, spiderman]: string []) => {
        console.log( thor);
        console.log( ironman);
        console.log( spiderman);
    }
    extraerArr(avengers);
})();

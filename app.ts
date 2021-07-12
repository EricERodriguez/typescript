

( () => {

    const avenger = {
        nombre: 'Steve',
        clave: 'Capitan america',
        poder: 'Drogas'
    }


    const extraer = (avenger: any) => {
        const { nombre, clave, poder } = avenger;
    
        console.log(nombre);
        console.log(clave);
        console.log(poder);
    }
    
    extraer (avenger);
})();

// alert("Hola Mundo");

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

//reconoces una acción por que tiene un parentesís después del nombre de la acción
//a veces tiene el operador punto

typewriter
    .pauseFor(2500) //milisegundos 2.5 segundos
    .typeString('Frida Sofia Zitle') //
    .pauseFor(300)
    .deleteAll()
    .typeString('Desarrolladora FRONTED JR')
    .pauseFor(1000)
    .start();
// scroll: evento que se ejecuta cuando damos scroll hacia cualquier dirección
// window.addEventListener('scroll', () =>{
//     console.log('scrolling');
// })

// Forma de detectar la cantidad de veces que hemos dado scroll de forma vertical
// Nos informa si estamos dando scroll hacia abajo o hacia arriba
// window.addEventListener('scroll', ()=>{
//     const  scrollPX = window.scrollY;

//     console.log(scrollPX);
// }); 

// Dando animación a una sección con el scroll
// .getBoundingClientRect() método que nos da información como: a que distancia se encuentra un elemento desde el inicio de nuestro sitio web
window.addEventListener('scroll', ()=>{
    
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    // console.log(ubicacion);

    if(ubicacion.top < 728) {
        console.log('El elemento ya esta visible');
    } else {
        console.log('Aún no, da más scroll')
    }

    
}); 

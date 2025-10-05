// En este video se aprendio a prevenir el event bubbling con delegation usando .target para ver la información del elemento, .classList para acceder a las clases del elemento, .contains() para acceder al valor de la clase. Con el if le decimos al programa que hacer si se da clic en cada clase señalada.

// A diferencia del anterior forma, aqui solo es necesario seleccionar un elemento e ir delegando la funcionalidad a los elementos hijos y al elemento padre seleccionado

const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', e =>{
    if(e.target.classList.contains('titulo')){
        console.log('Diste clic en titulo')
    } else if(e.target.classList.contains('categoria')){
        console.log('Diste clic en categoria')
    } else if(e.target.classList.contains('info')){
        console.log('Diste clic en la info')
    } else if(e.target.classList.contains('card')){
        console.log('Diste clic en card')
    } else if(e.target.classList.contains('precio')){
        console.log('Diste clic en precio')
    } else {
        console.log('diste clic en imagen')
    }
});
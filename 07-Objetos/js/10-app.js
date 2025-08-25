const producto = {
    nombre : 'Monitor 20 Pulgadas',
    precio : 200,
    disponible : true
}

const medidas = {
    peso : '1kg',
    medida : '1m'
}

// Concatenar 2 Objetos

/* 1ra forma común
Se crea una nueva variable para guardar nuestro nuevo objeto.
... es el signo para copiar el objeto anterior y despues se debe
colocar el nombre del objeto que se desea copiar, lo separamos
con una coma volvemos a copiar el otro objeto que deseamos con los
... y colocamos el nombre del 2do objeto que queremos copiar */
const resultado = {...producto, ...medidas};

/* 2da forma no común
Usando el método Object.assign(), adentro de los parentesis
colocamos los nombres de los objetos que deseamos concatenar */
const resultado2 = Object.assign(producto, medidas);

// Dan el mismo resultado
console.log(resultado);
console.log(resultado2);

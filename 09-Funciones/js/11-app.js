// Forma tradicional
const aprendiendo = function(tecnologia) {
    console.log(`Aprendiendo ${tecnologia}`);
}
aprendiendo('JavaScript');

// Arrow Function
// Cuando solo tenemos un parámetro no son necesarios los parentesis ()
const aprendiendo2 = tecnologia => `Aprendiendo ${tecnologia}`;
console.log(aprendiendo2('JavaScript'));
// Pero cuando tenemos mas de un parámetro sin son necesario los
// parentesis
const aprendiendo3 = (tecnologia1, tecnologia2) => `Aprendiendo ${tecnologia1} y ${tecnologia2}`;
console.log(aprendiendo3('JavaScript', 'Node.js'))
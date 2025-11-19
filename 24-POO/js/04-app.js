class Cliente {

    #nombre;

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }
}

const angel = new Cliente();
angel.setNombre('Angel');
console.log(angel.getNombre());

// console.log(angel.#nombre); // No permite acceder a la propiedad
import { nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente} from "./cliente.js";
import { Empresa } from "./empresa.js";

console.log(nombreCliente);
console.log(ahorro);

console.log(mostrarInformacion(nombreCliente, ahorro));

tieneSaldo(ahorro);

const cliente = new Cliente(nombreCliente, ahorro);

console.log(cliente);

console.log(cliente.mostrarInformacion());

// Importar empresa

const empresa = new Empresa('Dabxis', 1000, 'Aprendizaje');
console.log(empresa.mostrarInformacion());
type Lugar= {
    id:number,
    nombre:string,
    tipo:string,
    peligro:number
}

type Personaje={
    id:number,
    nombre:string,
    fuerza:number,
    aliado:boolean
}

type Objeto={
    id:number,
    nombre:string,
    poder:number,
    categoria:string
}

const lugares: Lugar[] = [
  { id: 1, nombre: "Bosque Misterioso", tipo: "bosque", peligro: 2 },
  { id: 2, nombre: "Cueva Oscura", tipo: "cueva", peligro: 5 },
  { id: 3, nombre: "Castillo Abandonado", tipo: "castillo", peligro: 4 }
];
 
const personajes: Personaje[] = [
  { id: 1, nombre: "Guardián", fuerza: 8, aliado: false },
  { id: 2, nombre: "Sabio", fuerza: 2, aliado: true },
  { id: 3, nombre: "Bandido", fuerza: 6, aliado: false }
];
 
const objetos: Objeto[] = [
  { id: 1, nombre: "Espada", poder: 5, categoria: "arma" },
  { id: 2, nombre: "Antorcha", poder: 1, categoria: "herramienta" },
  { id: 3, nombre: "Amuleto", poder: 3, categoria: "mágico" },
  { id: 4, nombre: "Escudo", poder: 4, categoria: "arma" }
];

const buscarPersonaje: (nombre: string) => void = (nombre: string): void=> {
    const resultado: Personaje[] = personajes.filter(
        (p: Personaje) => p.nombre.toLowerCase() === nombre.toLowerCase()
    );
    if (resultado.length===0) {
        console.log(`No se ha encontrado a "${nombre}". `);
        return;
    }
    resultado.forEach((p: Personaje): void => {
        const tipo = p.aliado ? "aliado" : "enemigo";
        console.log(`${p.nombre} tiene una fuerza de: ${p.fuerza} y es un ${tipo}`);
    });
    
};

console.log(buscarPersonaje("juan"))
console.log(buscarPersonaje("Sabio"))
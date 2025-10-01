type Lugar={
    id:number,
    nombre:String,
    tipo:string,
    peligro:number
}

type Personaje={
    id:number,
    nombre:String,
    fuerza:number,
    aliado:boolean
}

type Objeto={
    id:number,
    nombre:String,
    poder:number,
    categoria:String
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


const listarLugares =(recorrer:Lugar[]): void =>{
    recorrer.forEach((dato:Lugar)=>{
        console.log(dato.nombre,"(peligro: ",dato.peligro," )")
    })

}

//console.log(listarLugares(lugares))

const inventarioConFrases =(recorre: Objeto[]): string[] =>{
    const arraydeStrings:string[] = recorre.map((dato: Objeto)=>{
            return(dato.nombre+ "(+"+dato.poder+" poder "+"categoria: "+dato.categoria+")")
    })

    return arraydeStrings;

}

console.log(inventarioConFrases(objetos));

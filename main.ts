
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

const agruparObjetosPorCategoria: () => Record<string, number>= (): Record<string, number> => {
    return objetos.reduce((acumulador,objeto)=>{
        const categoria= objeto.categoria;
        if (!acumulador[categoria]) {
            acumulador[categoria] = 0;
        }
        acumulador[categoria] += objeto.poder;
        return acumulador;
    }, {} as Record<string,number>);

};


const poderTotalInventario= (): number => {
    return objetos.reduce((total,objeto)=> {
        return total + objeto.poder;
    },0 );
};


const main = (): void => {
  const opcion: number = 3; // Cambia este número para probar
 
  switch (opcion) {
    case 1:
      listarLugares(lugares);
      break;
    case 2:
      const nombreBuscado = "Sabio"; // Cambia el nombre para probar
      buscarPersonaje(nombreBuscado);
      break;
    case 3:
      console.log(inventarioConFrases(objetos));
      break;
    case 4:
      console.log(agruparObjetosPorCategoria());
      break;
    case 5:
      console.log("Poder total:", poderTotalInventario());
      break;
    default:
      console.log("Opción no válida.");
  } 
};
main();

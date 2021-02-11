const objeto = {
  mascotas: ["perros", "gatos", "canarios", "pez", "serpiente", "patrollos"],

  eliminarMascota: (mascota) => {
    arreglo = objeto.mascotas;
    eliminar = arreglo.indexOf(mascota);
    arreglo.splice(eliminar, 1);
    return arreglo;
  },

  eliminarUltimaMascota: () => {
    arreglo = objeto.mascotas;
    this.arreglo.pop();
    return this.arreglo;
  },

  agregarMascota: (mascota) => {
    arreglo = objeto.mascotas;
    this.arreglo.push(mascota);
    return this.arreglo;
  },

  contadorMascotas: () => {
    let count = 0;
    arreglo = objeto.mascotas;
    this.arreglo.map((item) => {
      lastCharacters = item.substr(-2);
      if (lastCharacters == "os") {
        count = count + 1;
      }
    });
    return console.log(
      " En el arreglo hay ",
      count,
      " mascotas que terminan con 'os' "
    );
  },
};

const trabajador = {
  nombre: "Jhon Smith",
  cargo: "QA",
  empresa: {
    ubicación: {
      comuna: "Santiago",
      puesto: "nº 24",
    },
    datos: {
      nombre: "ACME",
    },
    clientes: ["Facebook", "Google"],
  },
  gustos: ["comer", "ver televisión", "dormir"],
  hijos: null,
};

const {
  nombre,
  cargo,
  empresa: {
      ubicación:{
          comuna,
          puesto
      },
      datos:{
          nombre:nombreEmpresa
      },
      clientes: [red1, red2]
  },
  gustos: [comida1, comida2, comida3],
  hijos = "no tiene hijos",
} = trabajador;


const functionDes1 = () =>{

        if(hijos == null){
           hijosValid = "no tiene hijos";
        }else{
            hijosValid = hijos;
        }

        return console.log(`el trabajador ${nombre} trabaja en ${nombreEmpresa} con cargo ${cargo} y le gusta ${comida1} y ${comida2} mas, ${hijosValid}`)
}; 

const functionDes2 = () =>{

    if(hijos == null){
       hijosValid = "no tiene hijos";
    }else{
        hijosValid = hijos;
    }

    return console.log(`el trabajador ${nombre} va a su trabajo en ${comuna} es ${cargo} en el puesto ${puesto} y trabaja con ${red1} y ${red2}`)
}; 


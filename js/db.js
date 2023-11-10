
// const autos = [
// 	{
// 		marca: 'BMW',
// 		modelo: 'Serie 3',
// 		year: 2020,
// 		precio: 30000,
// 		puertas: 4,
// 		color: 'Blanco',
// 		transmision: 'automatico'
// 	},
// 	{ 
//         marca: 'Audi', 
//         modelo: 'A4', 
//         year: 2020, 
//         precio: 40000, 
//         puertas: 4, 
//         color: 'Negro', 
//         transmision: 'automatico' 
//     },
// 	{
// 		marca: 'Ford',
// 		modelo: 'Mustang',
// 		year: 2015,
// 		precio: 20000,
// 		puertas: 2,
// 		color: 'Blanco',
// 		transmision: 'automatico'
// 	},
// 	{ 
//         marca: 'Audi', 
//         modelo: 'A6', 
//         year: 2020, 
//         precio: 35000, 
//         puertas: 4, 
//         color: 'Negro', 
//         transmision: 'automatico' 
//     },
// 	{
// 		marca: 'BMW',
// 		modelo: 'Serie 5',
// 		year: 2016,
// 		precio: 70000,
// 		puertas: 4,
// 		color: 'Rojo',
// 		transmision: 'automatico'
// 	},
// 	{
// 		marca: 'Mercedes Benz',
// 		modelo: 'Clase C',
// 		year: 2015,
// 		precio: 25000,
// 		puertas: 4,
// 		color: 'Blanco',
// 		transmision: 'automatico'
// 	},
// 	{
// 		marca: 'Chevrolet',
// 		modelo: 'Camaro',
// 		year: 2018,
// 		precio: 60000,
// 		puertas: 2,
// 		color: 'Rojo',
// 		transmision: 'manual'
// 	},
// 	{ 
//         marca: 'Ford', 
//         modelo: 'Mustang', 
//         year: 2019, 
//         precio: 80000, 
//         puertas: 2, 
//         color: 'Rojo', 
//         transmision: 'manual' 
//     },
// 	{
// 		marca: 'Dodge',
// 		modelo: 'Challenger',
// 		year: 2020,
// 		precio: 40000,
// 		puertas: 4,
// 		color: 'Blanco',
// 		transmision: 'automatico'
// 	},
// 	{ 
//         marca: 'Audi', 
//         modelo: 'A3', 
//         year: 2017, 
//         precio: 55000, 
//         puertas: 2, 
//         color: 'Negro', 
//         transmision: 
//         'manual' 
//     },
// 	{
// 		marca: 'Dodge',
// 		modelo: 'Challenger',
// 		year: 2020,
// 		precio: 25000,
// 		puertas: 2,
// 		color: 'Rojo',
// 		transmision: 'manual'
// 	},
// 	{
// 		marca: 'Mercedes Benz',
// 		modelo: 'Clase C',
// 		year: 2018,
// 		precio: 45000,
// 		puertas: 4,
// 		color: 'Azul',
// 		transmision: 'automatico'
// 	},
// 	{
// 		marca: 'BMW',
// 		modelo: 'Serie 5',
// 		year: 2019,
// 		precio: 90000,
// 		puertas: 4,
// 		color: 'Blanco',
// 		transmision: 'automatico'
// 	},
// 	{ 
//         marca: 'Ford', 
//         modelo: 'Mustang', 
//         year: 2017, 
//         precio: 60000, 
//         puertas: 2, 
//         color: 'Negro', 
//         transmision: 'manual' 
//     },
// 	{
// 		marca: 'Dodge',
// 		modelo: 'Challenger',
// 		year: 2015,
// 		precio: 35000,
// 		puertas: 2,
// 		color: 'Azul',
// 		transmision: 'automatico'
// 	},
// 	{
// 		marca: 'BMW',
// 		modelo: 'Serie 3',
// 		year: 2018,
// 		precio: 50000,
// 		puertas: 4,
// 		color: 'Blanco',
// 		transmision: 'automatico'
// 	},
// 	{
// 		marca: 'BMW',
// 		modelo: 'Serie 5',
// 		year: 2017,
// 		precio: 80000,
// 		puertas: 4,
// 		color: 'Negro',
// 		transmision: 'automatico'
// 	},
// 	{
// 		marca: 'Mercedes Benz',
// 		modelo: 'Clase C',
// 		year: 2018,
// 		precio: 40000,
// 		puertas: 4,
// 		color: 'Blanco',
// 		transmision: 'automatico'
// 	},
// 	{ 
//         marca: 'Audi', 
//         modelo: 'A4', 
//         year: 2016, 
//         precio: 30000, 
//         puertas: 4, 
//         color: 'Azul', 
//         transmision: 'automatico' 
//     }
// ]

// // console.table(strains);

// let marca = prompt("Ingresar marca");
// let year = Number(prompt("Ingresar año"));
// let minimo = Number(prompt("Ingresar minimo"));
// let maximo = Number(prompt("Ingresar maximo"));
// let puertas = Number(prompt("Ingresar puertas"));
// let transmision = prompt("Ingresar transmision");
// let color = prompt("Ingresar color");

// function mostrarAutos(autos) {
//   //console.log(autos);
//   autos.forEach((auto) =>
//     console.log(
//         auto.marca +
//         " - " +
//         auto.modelo +
//         " - " +
//         auto.year +
//         " - " +
//         auto.puertas +
//         " Puertas - Transmision " +
//         auto.transmision +
//         " - Precio " +
//         auto.precio +
//         " - Color " +
//         auto.color
//     )
//   );
// }

// function filtrarAutos() {
//   const resultado = autos
//     .filter(filtrarMarca)
//     .filter(filtrarYear)
//     .filter(filtrarMinimo)
//     .filter(filtrarMaximo)
//     .filter(filtrarPuertas)
//     .filter(filtrarTransmision)
//     .filter(filtrarColor);
//   if (resultado.length > 0) {
//     mostrarAutos(resultado);
//   } else {
//     alert("No hay esa marca en existencia");
//   }
//   //const resultado = autos.filter( auto => mostrarAutos())
// }

// function filtrarMarca(auto) {
//   if (marca) {
//     return auto.marca === marca;
//   }
//   return auto;
// }

// function filtrarYear(auto) {
//   if (year) {
//     return auto.year === year;
//   }
//   return auto;
// }

// function filtrarMinimo(auto) {
//   if (minimo) {
//     return auto.precio >= minimo;
//   }
//   return auto;
// }

// function filtrarMaximo(auto) {
//   if (maximo) {
//     return auto.precio <= maximo;
//   }
//   return auto;
// }

// function filtrarPuertas(auto) {
//   if (puertas) {
//     return auto.puertas === puertas;
//   }
//   return auto;
// }

// function filtrarTransmision(auto) {
//   if (transmision) {
//     return auto.transmision === transmision;
//   }
//   return auto;
// }

// function filtrarColor(auto) {
//   if (color) {
//     return auto.color === color;
//   }
//   return auto;
// }

// filtrarAutos();
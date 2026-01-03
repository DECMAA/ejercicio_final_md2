const ciudades = [
    { id: 1, name: "Buenos Aires, Argentina", temp: 20, estado: "Nublado", icon:"🌨️"},
    { id: 2, name: "Sucre, Bolivia", temp: 19, estado: "Lluvia", icon:"🌧️"},
    { id: 3, name: "Brasilia,Brasil", temp: 20, estado: "Parcial", icon: "🌥️"},
    { id: 4, name: "Santiago,Chile", temp: 15, estado: "Lluvia", icon: "🌧️"},
    { id: 5, name: "Bogotá,Colombia", temp: 30, estado: "Tormenta", icon: "🌧️"},
    { id: 6, name: "Quito, Ecuador", temp: 25, estado: "Nublado", icon: "🌨️"},
    { id: 7, name: "Georgetown, Guyana", temp: 29, estado: "Soleado", icon: "☀️" },
    { id: 8, name: "Paramaribo, Surinam ", temp: 18, estado: "Llovizna", icon: "🌧️"},
    { id: 9, name: "Lima, Perú", temp: 8, estado: "Soleado", icon: "☀️"},
    { id: 10, name: "Asunción, Paraguay", temp: 28, estado: "Parcial", icon: "🌥️" },
    { id: 11, name: "Montevideo, Uruguay", temp: 25, estado: "Parcial", icon: "🌥️" },
    { id: 12, name: "Caracas, Venezuela", temp: 26, estado: "Parcial", icon: "🌥️" },
];

const semana = [
    { dia: "Lunes", temp: 22 },
    { dia: "Martes", temp: 20 },
    { dia: "Miercoles", temp: 22 },
    { dia: "Jueves", temp: 32 },
    { dia: "Viernes", temp: 18 },
    { dia: "Sabado", temp: 22 },
    { dia: "Domingo", temp: 12 },

]

let html = document.getElementById("ciudades_contenedor")

let template = ""
for(let i = 0; i <ciudades.length;i++){
    template += `
        <div class="col-md-4">
           <div class="card">
                 <div class="card-header">
             Capital
                  </div>
                  <div class="card-body">
                <h5 class="card-title">${ciudades[i].name}</h5>
                <h6 class="card-title">${ciudades[i].temp} °C</h6>
                <h7 class="card-title">${ciudades[i].estado} ${ciudades[i].icon}</h7>
                  </div>
        </div>
        </div>
    `
}

html.innerHTML = template

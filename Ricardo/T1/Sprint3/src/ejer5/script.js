var personas = [
  {
    Nombre: "Ana",
    Edad: 25,
    DNI: "45678912B",
    "Tiene/No tiene hijos": "Tiene",
    "Fecha de nacimiento": "12/05/1998"
  },
  {
    Nombre: "Carlos",
    Edad: 30,
    DNI: "12345678A",
    "Tiene/No tiene hijos": "No tiene",
    "Fecha de nacimiento": "05/02/1993"
  },
  {
    Nombre: "Berta",
    Edad: 28,
    DNI: "98765432C",
    "Tiene/No tiene hijos": "Tiene",
    "Fecha de nacimiento": "20/03/1995"
  },
  {
    Nombre: "David",
    Edad: 31,
    DNI: "11223344D",
    "Tiene/No tiene hijos": "Tiene",
    "Fecha de nacimiento": "18/08/1992"
  },
  // Añade aquí las 15 filas adicionales
];

var table = document.getElementById("personas-table").getElementsByTagName('tbody')[0];

function ordenarTabla(columna) {
    personas.sort(function (a, b) {
        if (typeof a[columna] === 'string') {
            return a[columna].localeCompare(b[columna]);
        } else {
            return a[columna] - b[columna];
        }
    });

    renderTabla();
}

function renderTabla() {
    table.innerHTML = "";
    personas.forEach(function (persona) {
        var row = table.insertRow(table.rows.length);
        for (var key in persona) {
            var cell = row.insertCell(-1);
            cell.innerHTML = persona[key];
        }
    });
}

// Inicializar la tabla
renderTabla();

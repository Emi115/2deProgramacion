document
  .getElementById("createSudaderaForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Verificar si algún campo está vacío
    const formInputs = document.querySelectorAll("input, textarea");
    let isAnyEmpty = false;
    formInputs.forEach((input) => {
      // Modificar para no verificar el campo fotosSecundarias ya que puede estar vacío
      if (!input.value.trim() && input.id !== "fotosSecundarias") {
        isAnyEmpty = true;
      }
    });

    if (isAnyEmpty) {
      document.getElementById("mensaje").textContent =
        "Por favor, rellene todos los campos necesarios.";
      return;
    }

    document.getElementById("mensaje").textContent = ""; // Limpiar mensaje de advertencia

    // Obtener los valores del formulario
    const formData = {
      nombre: document.getElementById("nombre").value,
      color: document.getElementById("color").value,
      dibujo: document.getElementById("dibujo").value,
      talla: document.getElementById("talla").value.toUpperCase(), // Convertir a mayúsculas
      foto: document.getElementById("foto").value,
      // Convertir el string de fotosSecundarias en un array, separando por espacios
      fotosSecundarias: document
        .getElementById("fotosSecundarias")
        .value.split(" ")
        .filter((foto) => foto !== ""),
      capucha: document.getElementById("capucha").checked,
      precio: parseFloat(document.getElementById("precio").value),
      descripcion: document.getElementById("descripcion").value,
      stock: parseInt(document.getElementById("stock").value, 10),
    };

    // Enviar formulario
    fetch("http://localhost:3000/sudadera", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Sudadera creada con éxito!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error al crear la sudadera");
      });
  });

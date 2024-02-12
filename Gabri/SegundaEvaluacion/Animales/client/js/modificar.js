document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const sudaderaId = urlParams.get('id');

    const form = document.getElementById('updateSudaderaForm');
    const deleteButton = document.getElementById('deleteSudadera');

    // Cargar los detalles de la sudadera al cargar la página
    fetch(`/api/sudaderas/${sudaderaId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('nombre').value = data.nombre;
            document.getElementById('color').value = data.color;
            document.getElementById('dibujo').value = data.dibujo;
            document.getElementById('talla').value = data.talla;
            document.getElementById('foto').src = data.foto;
            document.getElementById('capucha').checked = data.capucha;
            document.getElementById('precio').value = data.precio;
            document.getElementById('descripcion').textContent = data.descripcion;
            document.getElementById('stock').value = data.stock;
            // Aquí puedes añadir la lógica para manejar las valoraciones si es necesario
        })
        .catch(error => console.error('Error al cargar los detalles de la sudadera:', error));

    // Manejar la actualización de la sudadera
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(form);
        const updatedData = {};
        formData.forEach((value, key) => {
            if (key === 'capucha') {
                updatedData[key] = formData.get(key) === 'on';
            } else {
                updatedData[key] = value;
            }
        });

        fetch(`/api/sudaderas/${sudaderaId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Sudadera actualizada con éxito:', data);
            // Aquí puedes añadir una notificación o redirección
        })
        .catch(error => console.error('Error al actualizar la sudadera:', error));
    });

    // Manejar la eliminación de la sudadera
    deleteButton.addEventListener('click', function() {
        const confirmDelete = confirm('¿Estás seguro de que quieres eliminar esta sudadera?');
        if (confirmDelete) {
            fetch(`/api/sudaderas/${sudaderaId}`, {
                method: 'DELETE',
            })
            .then(response => {
                if (response.ok) {
                    console.log('Sudadera eliminada con éxito');
                    // Aquí puedes redirigir al usuario de vuelta a la lista de sudaderas o mostrar un mensaje
                } else {
                    console.error('Error al intentar eliminar la sudadera');
                }
            })
            .catch(error => console.error('Error al eliminar la sudadera:', error));
        }
    });
});

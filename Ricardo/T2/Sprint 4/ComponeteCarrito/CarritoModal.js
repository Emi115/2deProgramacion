import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./CarritoModal.module.css";

function CarritoModal({ closeModal }) {
    const [carrito, setCarrito] = useState({ items: [] });

    useEffect(() => {
        fetchCarrito();
    }, []);

    const fetchCarrito = async () => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.get(
                "http://localhost:3000/compras/carrito",
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            setCarrito(response.data);
        } catch (error) {
            console.error("Error al obtener el carrito:", error);
        }
    };

    const ajustarCantidad = async (itemIndex, delta) => {
        const item = carrito.items[itemIndex];
        const nuevaCantidad = item.cantidad + delta; // Suma o resta 1

        if (nuevaCantidad < 1) {
            await eliminarItem(item.item._id);
        } else {
            const token = localStorage.getItem("token");
            try {
                await axios.patch(
                    "http://localhost:3000/compras/updateItem",
                    { sudaderaId: item.item._id, cantidad: nuevaCantidad },
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );
                // Aquí deberías actualizar el estado de tu carrito en el frontend,
                // similar a cómo se mostró en el ejemplo anterior.
                fetchCarrito(); // Recargar carrito
            } catch (error) {
                console.error("Error al ajustar cantidad:", error);
            }
        }
    };

    const eliminarItem = async (itemId) => {
        const token = localStorage.getItem("token");
        try {
            await axios.delete(`http://localhost:3000/compras/removeItem`, {
                headers: { Authorization: `Bearer ${token}` },
                data: { sudaderaId: itemId }, // Enviar el sudaderaId en el cuerpo de la petición
            });
            fetchCarrito(); // Recargar carrito
        } catch (error) {
            console.error("Error al eliminar el ítem:", error);
        }
    };

    const finalizarCompra = () => {
        alert("Compra realizada con éxito!");
        // Implementar lógica de finalización de compra aquí
    };

    const precioTotalCarrito = carrito.items.reduce(
        (acc, curr) => acc + curr.item.precio * curr.cantidad,
        0
    );

    return (
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
                <button onClick={closeModal} className={styles.closeButton}>
                    X
                </button>
                <div className={styles.itemsContainer}>
                    {carrito.items.length > 0 ? (
                        carrito.items.map((item, index) => (
                            <div key={index} className={styles.item}>
                                <img
                                    src={
                                        item.item.foto
                                            ? `/images/${item.item.foto}`
                                            : "/images/defaultImage.png"
                                    }
                                    alt={item.item.nombre}
                                    className={styles.itemImage}
                                />
                                <div className={styles.itemDetails}>
                                    <p className={styles.itemName}>
                                        {item.item.nombre}
                                    </p>
                                    <div className={styles.cantidadControl}>
                                        <button
                                            onClick={() =>
                                                ajustarCantidad(index, -1)
                                            }
                                        >
                                            -
                                        </button>
                                        <span>{item.cantidad}</span>
                                        <button
                                            onClick={() =>
                                                ajustarCantidad(index, 1)
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                    <p>Precio: ${item.item.precio}</p>
                                    <p>
                                        Subtotal: $
                                        {(
                                            item.cantidad * item.item.precio
                                        ).toFixed(2)}
                                    </p>
                                    <button
                                        onClick={() =>
                                            eliminarItem(item.item._id)
                                        }
                                        className={styles.eliminarBtn}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>El carrito está vacío.</p>
                    )}
                </div>
                {carrito.items.length > 0 && (
                    <>
                        <div className={styles.totalCarrito}>
                            Precio Total del Carrito: $
                            {precioTotalCarrito.toFixed(2)}
                        </div>
                        <div className={styles.finalizarCompra}>
                            <button onClick={finalizarCompra}>
                                Finalizar Compra
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default CarritoModal;

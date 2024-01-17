// Contador Component
import React, { useState } from 'react';

const Contador = () => {
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1);
    };

    const resetear = () => {
        setContador(0);
    };

    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={resetear}>Resetear</button>
        </div>
    );
};

export default Contador;

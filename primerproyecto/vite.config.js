import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import '/BotonAgregar.css';
import { useState } from 'react';
const BotonAgregar = () => { 
const [constador, setcontador] =
useState (0);
 const handleAgregar = () => {
    setcontador(contador + 1);
};
return(
<div>
<button className='boton-agregar' onClick={handleAgregar}>agregar</button>
<p>contador: {contador}</p>
</div>
);
};





// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


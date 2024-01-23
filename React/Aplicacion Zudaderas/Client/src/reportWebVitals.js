const reportWebVitals = onPerfEntry => {
  // Verifica si onPerfEntry es proporcionado y es una función
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Importación dinámica del módulo 'web-vitals'
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Llamadas a las funciones de 'web-vitals' para medir las métricas de rendimiento
      getCLS(onPerfEntry);   // Medir Cumulative Layout Shift
      getFID(onPerfEntry);   // Medir First Input Delay
      getFCP(onPerfEntry);   // Medir First Contentful Paint
      getLCP(onPerfEntry);   // Medir Largest Contentful Paint
      getTTFB(onPerfEntry);  // Medir Time to First Byte
    });
  }
};

// Exporta la función reportWebVitals para su uso en otras partes del proyecto
export default reportWebVitals;

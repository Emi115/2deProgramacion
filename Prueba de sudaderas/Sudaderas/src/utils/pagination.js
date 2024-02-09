// La función `paginationItems` toma dos argumentos: `req` (objeto de solicitud HTTP) y `items` (lista de elementos paginados)
export const paginationItems = (req, items) => {
  // Extraer los parámetros de consulta 'limit' y 'offset' del objeto de solicitud 'req'
  const {
    query: { limit, offset },
  } = req;
  // Convertir 'offset' y 'limit' a números enteros
  const first = parseInt(offset, 10);
  const step = parseInt(limit, 10);
  // Calcular el índice del último elemento en la página actual
  const last = first + step;

  // Calcular el índice del último elemento en la última página
  const lastPage = Math.floor((items.total - 1) / step) * step;
  // Calcular el índice del primer elemento en la próxima página
  const nextPage = Math.floor(last / step) * step;
  // Calcular el índice del primer elemento en la página anterior
  const prevPage = Math.floor((first - step) / step) * step;

  // Devolver un objeto con información de paginación
  return {
    links: {
      base: `${req.headers.host}${req.baseUrl}`, // URL base de la API
      first: first !== 0 ? `?offset=0&limit=${step}` : undefined, // Enlace a la primera página
      previous: first >= step ? `?offset=${prevPage}&limit=${step}` : undefined, // Enlace a la página anterior si es posible
      next: first < lastPage ? `?offset=${nextPage}&limit=${step}` : undefined, // Enlace a la próxima página si es posible
      last: first < lastPage ? `?offset=${lastPage}&limit=${step}` : undefined, // Enlace a la última página si es posible
    },
    offset, // Offset actual
    limit, // Límite de elementos por página
    total: items.total, // Total de elementos en la lista
    pages: Math.ceil(items.total / step), // Total de páginas
    results: items.values, // Elementos de la página actual
  };
};

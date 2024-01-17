export function parseQuery(req, res, next) {
  // Extraer y convertir parámetros de consulta limit y offset
  const { limit, offset, ...rest } = req.query;
  req.query = {
      limit: parseInt(limit, 10) || 10,
      offset: parseInt(offset, 10) || 0,
      ...rest,
  };

  // Pasar al siguiente middleware
  next();
}

import  db from "../db/db";

export interface AsignacionRuta {
  asignacion_id?: number;
  ruta_id: number;
  empleado_id: number;
  fecha_asignacion?: Date;
  fecha_fin?: Date;
  estado?: string;
  created_at?: Date;
}

// Crear una nueva asignación de ruta
export const createAsignacionRuta = async (asignacionRuta: AsignacionRuta): Promise<AsignacionRuta | null> => {
  const newAsignacionRuta = await db.query(
    'INSERT INTO asignacion_ruta (ruta_id, empleado_id, fecha_asignacion, fecha_fin, estado) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [
      asignacionRuta.ruta_id,
      asignacionRuta.empleado_id,
      asignacionRuta.fecha_asignacion || new Date(),
      asignacionRuta.fecha_fin || null,
      asignacionRuta.estado || 'activa'
    ]
  );
  return newAsignacionRuta.rows[0] || null;
};

// Obtener todas las asignaciones de ruta
export const getAsignacionesRuta = async (): Promise<AsignacionRuta[]> => {
  const result = await db.query('SELECT * FROM asignacion_ruta');
  return result.rows;
};

// Eliminar asignación de ruta
export const deleteAsignacionRuta = async (id: number): Promise<AsignacionRuta | null> => {
  const deletedAsignacionRuta = await db.query(
    'DELETE FROM asignacion_ruta WHERE asignacion_id = $1 RETURNING *',
    [id]
  );
  return deletedAsignacionRuta.rows[0] || null;
};

// Actualizar asignación de ruta
export const updateAsignacionRuta = async (id: number, asignacionRuta: AsignacionRuta): Promise<AsignacionRuta | null> => {
  const updatedAsignacionRuta = await db.query(
    'UPDATE asignacion_ruta SET ruta_id = $1, empleado_id = $2, fecha_asignacion = $3, fecha_fin = $4, estado = $5 WHERE asignacion_id = $6 RETURNING *',
    [
      asignacionRuta.ruta_id,
      asignacionRuta.empleado_id,
      asignacionRuta.fecha_asignacion || new Date(),
      asignacionRuta.fecha_fin || null,
      asignacionRuta.estado || 'activa',
      id
    ]
  );
  return updatedAsignacionRuta.rows[0] || null;
};

export default {
  createAsignacionRuta,
  getAsignacionesRuta,
  deleteAsignacionRuta,
  updateAsignacionRuta
};
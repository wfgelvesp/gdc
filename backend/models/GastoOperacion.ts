import  db   from "../db/db";

export interface GastoOperacion {
  gasto_id?: number;
  usuario_id: number;
  ruta_id: number;
  fecha_gasto?: Date;
  concepto: string;
  monto: number;
  descripcion?: string;
  created_at?: Date;
}

// Crear gasto de operación
export const createGastoOperacion = async (gasto: GastoOperacion): Promise<GastoOperacion | null> => {
  const result = await db.query(
    `INSERT INTO gastos_operacion (usuario_id, ruta_id, fecha_gasto, concepto, monto, descripcion) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    [
      gasto.usuario_id,
      gasto.ruta_id,
      gasto.fecha_gasto || new Date(),
      gasto.concepto,
      gasto.monto,
      gasto.descripcion || null,
    ]
  );
  return result.rows[0] || null;
};

// Obtener todos los gastos de operación
export const getAllGastosOperacion = async (): Promise<GastoOperacion[]> => {
  const result = await db.query(`SELECT * FROM gastos_operacion`);
  return result.rows;
};  

// Eliminar gasto de operación
export const deleteGastoOperacion = async (gasto_id: number): Promise<GastoOperacion | null> => {
  const result = await db.query(
    `DELETE FROM gastos_operacion WHERE gasto_id = $1 RETURNING *`,
    [gasto_id]
  );
  return result.rows[0] || null;
};

// Actualizar gasto de operación
export const updateGastoOperacion = async (gasto_id: number, gasto: GastoOperacion): Promise<GastoOperacion | null> => {
  const result = await db.query(
    `UPDATE gastos_operacion SET usuario_id = $1, ruta_id = $2, fecha_gasto = $3, concepto = $4, monto = $5, descripcion = $6 WHERE gasto_id = $7 RETURNING *`,
    [
      gasto.usuario_id,
      gasto.ruta_id,
      gasto.fecha_gasto,
      gasto.concepto,
      gasto.monto,
      gasto.descripcion,
      gasto_id,
    ]
  );
  return result.rows[0] || null;
};

export default {
  createGastoOperacion,
  getAllGastosOperacion,
  deleteGastoOperacion,
  updateGastoOperacion,
};
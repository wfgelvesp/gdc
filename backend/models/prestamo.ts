import e from "express";
import db from "../db/db";

export interface Prestamo {
  prestamo_id?: number;
  cliente_id: number;
  periodo_id: number;
  monto_prestamo: number;
  fecha_desembolso: Date;
  estado_prestamo_id: number;
  saldo_pendiente?: number;
  created_at?: Date;
  tipo_prestamo_id: number;
}

export const createPrestamo = async (prestamo: Prestamo): Promise<Prestamo| null> => {
  const result = await db.query(
    `INSERT INTO prestamos (cliente_id, periodo_id, monto_prestamo, fecha_desembolso, estado_prestamo_id, saldo_pendiente, tipo_prestamo_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
    [
      prestamo.cliente_id,
      prestamo.periodo_id,  
      prestamo.monto_prestamo,
      prestamo.fecha_desembolso,
      prestamo.estado_prestamo_id,
      prestamo.saldo_pendiente || prestamo.monto_prestamo,
      prestamo.tipo_prestamo_id,
    ]
  );
  return result.rows[0];
};

// Obtener todos los préstamos
export const getAllPrestamos = async (): Promise<Prestamo[]> => {
  const result = await db.query(`SELECT * FROM prestamos`);
  return result.rows;
};

// Obtener un préstamo por ID
export const getPrestamoById = async (prestamo_id: number): Promise<Prestamo | null> => {
  const result = await db.query(`SELECT * FROM prestamos WHERE prestamo_id = $1`, [prestamo_id]);
  return result.rows[0] || null;
};

// Actualizar un préstamo
export const updatePrestamo = async (prestamo_id: number, prestamo: Prestamo): Promise<Prestamo | null> => {
  const result = await db.query(
    `UPDATE prestamos SET cliente_id = $1, periodo_id = $2, monto_prestamo = $3, fecha_desembolso = $4, estado_prestamo_id = $5, saldo_pendiente = $6, tipo_prestamo_id = $7 WHERE prestamo_id = $8 RETURNING *`,
    [
      prestamo.cliente_id,
      prestamo.periodo_id,
      prestamo.monto_prestamo,  
      prestamo.fecha_desembolso,
      prestamo.estado_prestamo_id,
      prestamo.saldo_pendiente,
      prestamo.tipo_prestamo_id,
      prestamo_id,
    ]
  );
  return result.rows[0] || null;
};

// Eliminar un préstamo
export const deletePrestamo = async (prestamo_id: number): Promise<Prestamo | null> => {
  const result = await db.query(`DELETE FROM prestamos WHERE prestamo_id = $1 RETURNING *`, [prestamo_id]);
  return result.rows[0] || null;
};  

 export default{
  createPrestamo,
  getAllPrestamos,
  getPrestamoById,
  updatePrestamo,
  deletePrestamo,
};



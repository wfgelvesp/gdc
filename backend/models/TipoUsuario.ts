import db from "../db/db";

export interface TipoUsuario {
  id_tipo_usuario?: number;
  nombre_tipo_usuario: string;
  descripcion_tipo_usuario?: string;

}

//crear tipo de usuario
export const createTipoUsuario = async (tipoUsuario: TipoUsuario): Promise<TipoUsuario|null> => {
  const newTipoUsuario =
  await db.query(
    'INSERT INTO tipo_usuario (nombre_tipo_usuario, descripcion_tipo_usuario) VALUES ($1, $2) RETURNING *',
    [
      tipoUsuario.nombre_tipo_usuario,
      tipoUsuario.descripcion_tipo_usuario || null
    ]
  );
  return newTipoUsuario.rows[0] || null;
}

//obtener todos los tipos de usuario
export const getTiposUsuario = async (): Promise<TipoUsuario[]> => {
  const result = await db.query('SELECT * FROM tipo_usuario');
  return result.rows;
} 


//eliminar usuario
export const deleteTipoUsuario = async (id: number): Promise<TipoUsuario | null > => {
  const deletedTipoUsuario = await db.query(
    'DELETE FROM tipo_usuario WHERE id_tipo_usuario = $1 RETURNING *',
    [id]
  );
  return deletedTipoUsuario.rows[0] || null;
}

//actualizar tipo de usuario
export const updateTipoUsuario = async (id: number, tipoUsuario: TipoUsuario): Promise<TipoUsuario | null> => {
  const updatedTipoUsuario = await db.query(
    'UPDATE tipo_usuario SET nombre_tipo_usuario = $1, descripcion_tipo_usuario = $2 WHERE id_tipo_usuario = $3 RETURNING *',
    [
      tipoUsuario.nombre_tipo_usuario,
      tipoUsuario.descripcion_tipo_usuario || null,
      id
    ]
  );
  return updatedTipoUsuario.rows[0] || null;
}

export default {
  createTipoUsuario,
  getTiposUsuario,
  deleteTipoUsuario,
  updateTipoUsuario
};

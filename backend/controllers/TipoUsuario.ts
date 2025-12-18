import TipoUsuario from "../models/TipoUsuario";
import { Request, Response } from "express";

// Crear tipo de usuario
export const createTipoUsuario = async (req: Request, res: Response): Promise<Response> => {
  try {
    if (!req.body.nombre_tipo_usuario) {
      return res.status(400).json({ error: 'El nombre del tipo de usuario es obligatorio' });
    }
    const tipoUsuario = req.body;
    const newTipoUsuario = await TipoUsuario.createTipoUsuario(tipoUsuario);
    return (!newTipoUsuario) 
    ? res.status(500).json({ error: 'No se pudo crear el tipo de usuario' }) 
    : res.status(201).send({ message: 'Tipo de usuario creado exitosamente' });
  } catch (error) {
    return res.status(500).json({ error: 'Error al crear el tipo de usuario' });
  }
};

// Obtener todos los tipos de usuario
export const getTiposUsuario = async (req: Request, res: Response): Promise<Response> => {
  try {
    const tiposUsuario = await TipoUsuario.getTiposUsuario();
    return res.status(200).json(tiposUsuario);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener los tipos de usuario' });
  }
};

// Eliminar tipo de usuario
export const deleteTipoUsuario = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id); 
    const deletedTipoUsuario = await TipoUsuario.deleteTipoUsuario(id);
    if (!deletedTipoUsuario) {
      return res.status(404).json({ error: 'Tipo de usuario no encontrado' });
    }
    return res.status(200).json(deletedTipoUsuario);
    } catch (error) {       
    return res.status(500).json({ error: 'Error al eliminar el tipo de usuario' });
  }
};

// Actualizar tipo de usuario
export const updateTipoUsuario = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id);
    const tipoUsuario = req.body;
    const updatedTipoUsuario = await TipoUsuario.updateTipoUsuario(id, tipoUsuario);
    if (!updatedTipoUsuario) {
      return res.status(404).json({ error: 'Tipo de usuario no encontrado' });
    }
    return res.status(200).json(updatedTipoUsuario);
  } catch (error) {
    return res.status(500).json({ error: 'Error al actualizar el tipo de usuario' });
  }
};

export default {
  createTipoUsuario,
  getTiposUsuario,
  deleteTipoUsuario,
  updateTipoUsuario
};
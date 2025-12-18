import AsignacionRuta from "../models/AsignacionRuta";
import { Request, Response } from "express";

// Crear asignación de ruta
export const createAsignacionRuta = async (req: Request, res: Response): Promise<Response> => {
  try {
    const asignacionRuta = req.body;
    const newAsignacionRuta = await AsignacionRuta.createAsignacionRuta(asignacionRuta);
    return (!newAsignacionRuta) 
    ? res.status(500).send({ error: 'No se pudo crear la asignación de ruta' }) 
    : res.status(201).json(newAsignacionRuta);
  } catch (error) {
    return res.status(500).send({ error: 'Error al crear la asignación de ruta' });
  }
};

// Obtener todas las asignaciones de ruta
export const getAsignacionesRuta = async (req: Request, res: Response): Promise<Response> => {
  try {
    const asignacionesRuta = await AsignacionRuta.getAsignacionesRuta();
    return (!asignacionesRuta )
    ? res.status(500).send({ error: 'No existen asignaciones de ruta creadas' })
    :res.status(200).json(asignacionesRuta);
  } catch (error) {
    return res.status(500).send({ error: 'Error al obtener las asignaciones de ruta' });
  }
};

// Eliminar asignación de ruta
export const deleteAsignacionRuta = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id); 
    const deletedAsignacionRuta = await AsignacionRuta.deleteAsignacionRuta(id);
    if (!deletedAsignacionRuta) {
      return res.status(404).json({ error: 'Asignación de ruta no encontrada' });
    }
    return res.status(200).json(deletedAsignacionRuta);
    } catch (error) {       
    return res.status(500).json({ error: 'Error al eliminar la asignación de ruta' });
  }
};

// Actualizar asignación de ruta
export const updateAsignacionRuta = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id);
    const asignacionRuta = req.body;
    const updatedAsignacionRuta = await AsignacionRuta.updateAsignacionRuta(id, asignacionRuta);
    if (!updatedAsignacionRuta) {
        return res.status(404).json({ error: 'Asignación de ruta no encontrada' });
    }
    return res.status(200).json(updatedAsignacionRuta);
  } catch (error) {
    return res.status(500).json({ error: 'Error al actualizar la asignación de ruta' });
  }
};

export default {
  createAsignacionRuta,
  getAsignacionesRuta,
  deleteAsignacionRuta,
  updateAsignacionRuta
};
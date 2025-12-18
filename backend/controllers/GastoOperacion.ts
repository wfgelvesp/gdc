import GastoOperacion from "../models/GastoOperacion";
import { Request, Response } from "express";

// Crear gasto de operación
export const createGastoOperacion = async (req: Request, res: Response): Promise<Response> => {
  try {
    const gastoOperacion = req.body;    
    const newGastoOperacion = await GastoOperacion.createGastoOperacion(gastoOperacion);
    return (!newGastoOperacion) 
    ? res.status(500).send({ error: 'No se pudo crear el gasto de operación' }) 
    : res.status(201).json(newGastoOperacion);
  } catch (error) {
    return res.status(500).send({ error: 'Error al crear el gasto de operación' });
  }
};

// Obtener todos los gastos de operación
export const getAllGastosOperacion = async (req: Request, res: Response): Promise<Response> => {
  try {
    const gastosOperacion = await GastoOperacion.getAllGastosOperacion();
    return res.status(200).json(gastosOperacion);
  } catch (error) {
    return res.status(500).send({ error: 'Error al obtener los gastos de operación' });
  }
};

// Eliminar gasto de operación
export const deleteGastoOperacion = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id); 
    const deletedGastoOperacion = await GastoOperacion.deleteGastoOperacion(id);
    if (!deletedGastoOperacion) {
      return res.status(404).json({ error: 'Gasto de operación no encontrado' });
    }   
    return res.status(200).json(deletedGastoOperacion);
    } catch (error) {       
    return res.status(500).json({ error: 'Error al eliminar el gasto de operación' });
  }
};

// Actualizar gasto de operación
export const updateGastoOperacion = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id);
    const gastoOperacion = req.body;
    const updatedGastoOperacion = await GastoOperacion.updateGastoOperacion(id, gastoOperacion);
    if (!updatedGastoOperacion) {
        return res.status(404).json({ error: 'Gasto de operación no encontrado' });
    }
    return res.status(200).json(updatedGastoOperacion);
    } catch (error) {
    return res.status(500).json({ error: 'Error al actualizar el gasto de operación' });
  }
};

export default {
  createGastoOperacion,
  getAllGastosOperacion,
  deleteGastoOperacion,
  updateGastoOperacion,
};
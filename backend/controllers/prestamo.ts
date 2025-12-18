import prestamo from "../models/prestamo";
import { Request, Response } from "express";

// Crear un nuevo préstamo
export const createPrestamo = async (req: Request, res: Response): Promise<Response> => {
  try {
    const newPrestamo = await prestamo.createPrestamo(req.body);
    return (!newPrestamo) 
    ? res.status(400).send({ error: 'No se pudo crear el préstamo' }) 
    :  res.status(201).json(newPrestamo);
  } catch (error) {
    return res.status(500).json({ error: 'Error al crear el préstamo' });
  }
};

// Obtener todos los préstamos
export const getAllPrestamos = async (req: Request, res: Response): Promise<Response> => {
  try {
    const prestamos = await prestamo.getAllPrestamos();
    return (!prestamos ) 
    ? res.status(404).send({ error: 'No existen préstamos creados' }) 
    : res.status(200).json(prestamos);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener los préstamos' });
  }
};

// Obtener un préstamo por ID
export const getPrestamoById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id);
    const prestamoById = await prestamo.getPrestamoById(id);
    if (!prestamoById) {
      return res.status(404).json({ error: 'Préstamo no encontrado' });
    }
    return res.status(200).json(prestamoById);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener el préstamo' });
  }
};

// Actualizar un préstamo   
export const updatePrestamo = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id);
    const updatedPrestamo = await prestamo.updatePrestamo(id, req.body);
    if (!updatedPrestamo) {
      return res.status(404).json({ error: 'Préstamo no encontrado' });
    }
    return res.status(200).json(updatedPrestamo);
    } catch (error) {
    return res.status(500).json({ error: 'Error al actualizar el préstamo' });
    }
};

// Eliminar un préstamo
export const deletePrestamo = async (req: Request, res: Response): Promise<Response> => {
    try {   
        const id = parseInt(req.params.id);
        const deletedPrestamo = await prestamo.deletePrestamo(id);
        if (!deletedPrestamo) {
            return res.status(404).json({ error: 'Préstamo no encontrado' });
        }
        return res.status(200).json(deletedPrestamo);
    } catch (error) {       
        return res.status(500).json({ error: 'Error al eliminar el préstamo' });
    }
};

export default {
  createPrestamo,
  getAllPrestamos,
  getPrestamoById,
  updatePrestamo,
  deletePrestamo,
};
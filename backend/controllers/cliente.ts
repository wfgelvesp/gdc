import  cliente  from "../models/cliente";
import { Request, Response } from "express";

//crear un nuevo cliente
const createCliente =async (req: Request, res: Response) => {
    try {
      if (!req.body.nombres || !req.body.apellidos || !req.body.direccion ||  !req.body.sucursal_id) {
         return res.status(400).send({ error: 'Faltan datos obligatorios' });         
      }
        const nuevoCliente = await cliente.createCliente(req.body);
        if (!nuevoCliente) {
            
             return res.status(400).send({ error: 'No se pudo crear el cliente' });
        }
       return res.status(201).send({ message: 'Cliente creado exitosamente' });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Error al crear el cliente' });
    }
};

//obtener todos los clientes
const getClientes = async (req: Request, res: Response) => {
    try {
      const clientes = await cliente.getClientes();    
        return  clientes.length === 0
        ? res.status(404).send({ message: 'No se encontraron clientes' })
        : res.status(200).json(clientes);
     
    } catch (error) {
        return res.status(500).send({ error: 'Error al obtener los clientes' });
    }   
};

//buscar un cliente por ID
const getClienteById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const clienteEncontrado = await cliente.getClienteById(id);  
          return clienteEncontrado===null
          ? res.status(404).send({ message: 'Cliente no encontrado' }) 
          : res.status(200).json(clienteEncontrado);
    } catch (error) {
        return res.status(500).send({ error: 'Error al obtener el cliente' });
    }   
};

//Obtener clientes por sucursal
const getClientesBySucursal = async (req: Request, res: Response) => {
    try { 
        const sucursal_id = parseInt(req.params.sucursal_id);   
        const clientesEncontrado = await cliente.getClientesBySucursal(sucursal_id);
          return clientesEncontrado===null
          ? res.status(404).send({ message: 'Cliente no encontrado para la sucursal' }) 
          : res.status(200).json(clientesEncontrado);
    }
        catch (error) {
        return res.status(500).send({ error: 'Error al obtener el cliente' });
    }   
};

//actualizar un cliente
const updateCliente = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const clienteActualizado = await cliente.updateCliente(id, req.body);
        
        return clienteActualizado===null
        ? res.status(404).send({ message: 'Cliente no encontrado o no se pudo actualizar' }) 
        : res.status(200).json(clienteActualizado);
    } catch (error) {
        return res.status(500).send({ error: 'Error al actualizar el cliente' });
    }   
};

//eliminar un cliente
const deleteCliente = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const clienteEliminado = await cliente.deleteCliente(id);
        return clienteEliminado===null
        ? res.status(404).send({ message: 'Cliente no encontrado o no se pudo eliminar' }) 
        : res.status(200).json(clienteEliminado);
    } catch (error) {
        return res.status(500).send({ error: 'Error al eliminar el cliente' });
    }
};

export default{
    createCliente,
    getClientes,
    getClienteById,
    getClientesBySucursal,
    updateCliente,
    deleteCliente
}
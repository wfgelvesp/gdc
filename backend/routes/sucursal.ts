import express from "express";
import sucursal from "../controllers/sucursal";


const router = express.Router();

router.get('/getSucursales', sucursal.getSucursales);
router.get('/getSucursalById/:id', sucursal.getSucursalById);
router.post('/createSucursal', sucursal.createSucursal);
router.put('/updateSucursal/:id', sucursal.updateSucursal);
router.delete('/deleteSucursal/:id', sucursal.deleteSucursal);



export default router;
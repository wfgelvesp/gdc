import GastoOperacion from "../controllers/GastoOperacion";
import express from "express";

const router = express.Router();

router.post("/gastooperacion", GastoOperacion.createGastoOperacion);
router.get("/gastooperacion", GastoOperacion.getAllGastosOperacion);
router.delete("/gastooperacion/:id", GastoOperacion.deleteGastoOperacion);
router.put("/gastooperacion/:id", GastoOperacion.updateGastoOperacion);

export default router;
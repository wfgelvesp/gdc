import TipoPrestamo from "../controllers/TipoPrestamo";
import express from "express";
const router = express.Router();

// Ruta para crear un nuevo tipo de préstamo
router.post("/TipoPrestamo", TipoPrestamo.createTipoPrestamo);
router.get("/TipoPrestamo", TipoPrestamo.getTiposPrestamo);
router.put("/TipoPrestamo/:id", TipoPrestamo.updateTipoPrestamo);
router.delete("/TipoPrestamo/:id", TipoPrestamo.deleteTipoPrestamo);

export default router;
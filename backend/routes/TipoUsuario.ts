import TipoUsuario from "../controllers/TipoUsuario";
import express from "express";

const router = express.Router();

router.post('/createTipoUsuario', TipoUsuario.createTipoUsuario);
router.get('/getTiposUsuario', TipoUsuario.getTiposUsuario);
router.put('/updateTipoUsuario/:id', TipoUsuario.updateTipoUsuario);
router.delete('/deleteTipoUsuario/:id', TipoUsuario.deleteTipoUsuario);

export default router;
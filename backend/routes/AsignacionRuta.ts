import AsignacionesRuta  from "../controllers/AsignacionRuta";
import express from "express";

const router = express.Router();

router.post('/createAsignacionRuta', AsignacionesRuta.createAsignacionRuta);
router.get('/getAsignacionesRuta', AsignacionesRuta.getAsignacionesRuta);
router.put('/updateAsignacionRuta/:id', AsignacionesRuta.updateAsignacionRuta);
router.delete('/deleteAsignacionRuta/:id', AsignacionesRuta.deleteAsignacionRuta);

export default router;  

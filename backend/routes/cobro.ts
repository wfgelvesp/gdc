import cobro from '../controllers/cobro';
import express from 'express';

const router = express.Router();

router.post('/createCobro', cobro.createCobro);
router.get('/cobro', cobro.getAllCobros);
router.get('/cobro/:id', cobro.getCobroById);
router.put('/cobro/:id', cobro.updateCobro);
router.delete('/cobro/:id', cobro.deleteCobro);

export default router;
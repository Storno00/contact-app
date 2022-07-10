import express from 'express';
import cors from 'cors';
import ContactController from './contact-controller';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.post('/', ContactController.post);
router.get('/:contactId', ContactController.get);
router.delete('/:contactId', ContactController.delete);

export default router;
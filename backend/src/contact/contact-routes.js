import express from 'express';
import cors from 'cors';
import ContactController from './contact-controller';
import validation from '../middlewares/validation';
import contactValidationSchema from '../validations/contact-validation-schema';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/', ContactController.getAll);
router.get('/:contactId', ContactController.get);
router.post('/', validation(contactValidationSchema), ContactController.post);
router.patch('/:contactId', validation(contactValidationSchema), ContactController.patch);
router.delete('/:contactId', ContactController.delete);

export default router;
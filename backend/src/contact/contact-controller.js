import ContactService from './contact-service';

class ContactController {
  static async get(req, res, next) {
    try {
      const contact = await ContactService.getContact(req.params);
      res.status(200).send(contact);
    } catch (err) {
      next(err);
    }
  }

  static async post(req, res, next) {
    try {
      const contact = await ContactService.createContact(req.body);
      res.status(200).send(contact);
    } catch (err) {
      next(err);
    }
  }

  static async patch(req, res, next) {
    try {
      const contact = await ContactService.updateContact(req.params, req.body);
      res.status(200).send(contact);
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const contact = await ContactService.removeContact(req.params);
      res.status(200).send(contact);
    } catch (err) {
      next(err);
    }
  }
}

export default ContactController;
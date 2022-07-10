import ContactService from './contact-service';

class ContactController {
  static async get() {}

  static async post(req, res, next) {
    try {
      const contact = await ContactService.createContact(req.body);
      res.status(200).send(contact);
    } catch (err) {
      next(err);
    }
  }

  static async patch() {}

  static async delete() {}
}

export default ContactController;
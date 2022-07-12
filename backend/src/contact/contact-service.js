import { PrismaClient } from '@prisma/client';
import validate from 'uuid-validate';
import HttpError from '../utils/HttpError';

const prisma = new PrismaClient;

class ContactService {
  static async getAllContacts() {
    return prisma.contact.findMany();
  }

  static async getContact({ contactId }) {
    if (!validate(contactId)) throw new HttpError('Invalid contact ID', 404);

    return prisma.contact.findUnique({
      where: {
        id: contactId,
      },
    });
  }

  static async createContact(contactData) {
    return prisma.contact.create({ data: contactData });
  }

  static async updateContact({ contactId }, contactData) {
    if (!validate(contactId)) throw new HttpError('Invalid contact ID', 404);

    return prisma.contact.update({
      where: {
        id: contactId,
      },
      data: contactData,
    });
  }

  static async removeContact({ contactId }) {
    if (!validate(contactId)) throw new HttpError('Invalid contact ID', 404);

    return prisma.contact.delete({
      where: {
        id: contactId,
      },
    });
  }
}

export default ContactService;
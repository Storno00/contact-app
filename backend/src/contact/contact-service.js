import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient;

class ContactService {
  static async createContact(contactData) {
    return prisma.contact.create({ data: contactData });
  }

  static async removeContact({ contactId }) {
    if (isNaN(contactId)) return { message: 'Invalid contact ID' };

    return prisma.contact.delete({
      where: {
        id: parseInt(contactId),
      }
    });
  }
}

export default ContactService;
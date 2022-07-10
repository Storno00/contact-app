import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient;

class ContactService {
  static async createContact(contactData) {
    return prisma.contact.create({ data: contactData });
  }
}

export default ContactService;
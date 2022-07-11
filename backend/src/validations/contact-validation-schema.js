import * as Yup from 'yup';

const phoneNumberPattern = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const urlPattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

const contactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'At least 5 characters are required for name')
    .max(100, 'Too many characters in name (max. 100)'),
  phoneNumber: Yup.string()
    .matches(phoneNumberPattern, 'Invalid phone number'),
  email: Yup.string()
    .email('Invalid email format')
    .max(100, 'Too many characters in email (max. 100)'),
  imageUrl: Yup.string()
    .matches(urlPattern, 'Invalid image url'),
});

export default contactValidationSchema;

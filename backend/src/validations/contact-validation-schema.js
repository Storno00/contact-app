import * as Yup from 'yup';

const phoneNumberPattern = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const urlPattern = /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

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
  isFavourite: Yup.boolean()
    .required('Needs to be a boolean'),
});

export default contactValidationSchema;

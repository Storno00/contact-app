import * as Yup from 'yup';

const phoneNumberPattern = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const addContactValidation = Yup.object().shape({
  name: Yup.string()
    .min(5, 'At least 5 characters are required for name')
    .max(100, 'Too many characters in name (max. 100)')
    .required('You need to add a name'),
  phoneNumber: Yup.string()
    .matches(phoneNumberPattern, 'Invalid phone number')
    .required('You need to add a phone number'),
  email: Yup.string()
    .email('Invalid email format')
    .max(100, 'Too many characters in email (max. 100)')
    .required('You need to add an email'),
});

export default addContactValidation;

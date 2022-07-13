import * as Yup from 'yup';

const addContactValidation = Yup.object().shape({
  name: Yup.string()
    .min(2, 'At least 2 characters are required for name')
    .max(100, 'Too many characters in name (max. 100)')
    .required('You need to add a name'),
  email: Yup.string()
    .email('Invalid email format')
    .max(100, 'Too many characters in email (max. 100)'),
});

export default addContactValidation;

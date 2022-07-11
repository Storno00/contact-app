import { useEffect, useRef, useState, useContext } from 'react';
import {BACKEND_CONTACT, CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_URL} from '../../constants/url';
import Axios from 'axios';
import { Formik } from 'formik';
import './AddContactModal.scss';
import addIcon from './../../icons/Add.svg';
import changeIcon from './../../icons/Change.svg';
import deleteIcon from './../../icons/Delete.svg';
import formSchema from './../../validations/AddContactValidation';
import TextInput from '../TextInput/TextInput';
import ContactsContext from '../../contexts/ContactProvider';

const defaultImageUrl = 'https://res.cloudinary.com/dooqcjpph/image/upload/v1657525303/Contact%20App/default_ug1ogk.png';

const initialValues = {
  name: '',
  phoneNumber: '',
  email: '',
};

const AddContactModal = ({ setShowModal }) => {

  const { contacts, setContacts } = useContext(ContactsContext);

  const [imgFile, setImgFile] = useState();
  const [imgUrl, setImgUrl] = useState(defaultImageUrl);
  const fileInputRef = useRef();

  const handleAddPicture = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    (file && file.type.substring(0, 5) === 'image') ? setImgFile(file) : setImgFile(null);
  };

  const handleDeletePicture = () => {
    setImgFile(null);
    setImgUrl(defaultImageUrl);
  };

  const uploadImage = async (picture) => {
    const formData = new FormData();
    formData.append('file', picture);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    const response = await Axios.post(CLOUDINARY_URL, formData);
    return response.data.url;
  };

  const handleOnSubmit = async (values) => {
    const imageUrl = imgFile ? await uploadImage(imgFile) : defaultImageUrl;
    const formData = { ...values, imageUrl };
    const response = await Axios.post(BACKEND_CONTACT, formData);
    if (response.status === 200) {
      setContacts([ ...contacts, response.data ])
    }
  };

  useEffect(() => {
    if (imgFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgUrl(reader.result);
      };
      reader.readAsDataURL(imgFile);
      return;
    }
    setImgUrl(defaultImageUrl);
  }, [imgFile]);

  return (
    <div className="add-contact-modal">
      <h2>Add contact</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={handleOnSubmit}
      >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
          <form onSubmit={handleSubmit} noValidate>
            <div className="image-upload">
              <div className="image">
                <img src={imgUrl} alt="contact-portrait" />
              </div>
              <input
                type="file"
                accept="image/*"
                className="hide"
                ref={fileInputRef}
                onChange={handleFileInput}
              />
              {imgUrl === defaultImageUrl && (
                <button type="button" className="main-btn body" onClick={handleAddPicture}>
                  <img src={addIcon} alt="add"/>
                  Add picture
                </button>
              )}
              {imgUrl !== defaultImageUrl && (
                <div className="edit-image">
                  <button type="button" className="main-btn body" onClick={handleAddPicture}>
                    <img src={changeIcon} alt="edit" className="icon-sm" />
                    Change picture
                  </button>
                  <button type="button" className="main-btn body" style={{ width: '40px' }} onClick={handleDeletePicture}>
                    <img src={deleteIcon} alt="delete" className="icon-sm" style={{ margin: '0' }}/>
                  </button>
                </div>
              )}
            </div>
            <TextInput
              label="Name"
              placeholder="Jamie Wright"
              name="name"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.name}
              errors={errors}
              touched={touched}
            />
            <TextInput
              label="Phone number"
              placeholder="+01 234 5678"
              name="phoneNumber"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.phoneNumber}
              errors={errors}
              touched={touched}
            />
            <TextInput
              label="Email address"
              placeholder="jamie.wright@mail.com"
              name="email"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.email}
              errors={errors}
              touched={touched}
            />
            <div className="form-buttons">
              <button
                type="button"
                className="main-btn body"
                onClick={() => setShowModal(false)}
                style={{ backgroundColor: '#141414' }}
              >
                Cancel
              </button>
              <button type="submit" className="main-btn body">
                Done
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddContactModal;
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import IUserAboutForm from './interfaces/IUserAboutForm';
import userAboutSchema from './schema/userAboutSchema';
import './style.css';

function UserAbout() {
  const intitialFormValue: IUserAboutForm = {
    about: '',
  };

  const { handleSection, storeUserAbout, handleIconsStatus, userAbout } = useContext(UserContext);
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState<IUserAboutForm>(intitialFormValue);
  const [formErrors, setFormErrors] = useState<IUserAboutForm>(intitialFormValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValue((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
  };

  const validateForm = (values: IUserAboutForm) => {
    const { about } = userAboutSchema;

    const errors = {
      about: about.validate(values.about).error?.details[0].message || '',
    };

    setFormErrors(errors);
    return Object.values(errors).every((e) => e === '');
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = validateForm(formValue);

    if (isValid) {
      navigate('/created');
    }
  };

  const handlePrevius = () => {
    const isValid = validateForm(formValue);
    if (isValid) {
      handleIconsStatus('userAbout', 'completed');
      storeUserAbout(formValue);
      handleSection('address');
    }
  };

  useEffect(() => {
    handleIconsStatus('userAbout', 'in-use');
    setFormValue(userAbout);
  }, []);

  return (
    <form className="user-about-form" onSubmit={handleSubmit}>
      <div className="about-text-area-container">
        <label htmlFor="about-text-area-field">
          <p>Nos conste mais sobre você</p>
          <textarea
            onChange={handleChange}
            className="about-text-area-input"
            name="about"
            id="about-text-area-field"
            value={formValue.about}
          />
          <p className="error-messages">{formErrors.about}</p>
        </label>
      </div>
      <div className="next-previous-btn-about-container">
        <button
          className="previous-btn previous-btn-about"
          type="button"
          onClick={handlePrevius}>
            Anterior
        </button>
        <button className="next-btn next-btn-about" type="submit">Próximo passo</button>
      </div>
    </form>
  );
}

export default UserAbout;

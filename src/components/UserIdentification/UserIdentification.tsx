import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { UserContext } from '../../context/UserContext';
import IUserIdentificationForm from './interfaces/IUserIdentificationForm';
import userIdentificationSchema from './schema/userIndetificationSchema';
import './style.css';

function UserIdentification() {
  const intitialFormValue: IUserIdentificationForm = {
    name: '', password: '', checkPassword: '', email: '', birthday: '',
  };
  const { handleSection, userInfo, storeUserInfo, handleIconsStatus } = useContext(UserContext);
  const [formValue, setFormValue] = useState<IUserIdentificationForm>(intitialFormValue);
  const [formErrors, setFormErrors] = useState<IUserIdentificationForm>(intitialFormValue);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValue((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
  };

  const validateForm = (values: IUserIdentificationForm) => {
    const { birthday, checkPassword, email, name, password } = userIdentificationSchema;

    const errors = {
      name: name.validate(values.name).error?.details[0].message || '',
      password: password.validate(values.password).error?.details[0].message || '',
      checkPassword: checkPassword.validate(values.checkPassword).error?.details[0].message || '',
      email: email.validate(values.email).error?.details[0].message || '',
      birthday: birthday.validate(values.birthday).error?.details[0].message || '',
    };

    if (errors.password === ''
    && errors.checkPassword === ''
    && formValue.password !== formValue.checkPassword) {
      errors.password = 'As senhas devem ser iguais';
      errors.checkPassword = 'As senhas devem ser iguais';
    }

    setFormErrors(errors);
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    validateForm(formValue);
    setIsSubmit(true);
  };

  const toggleVisible = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  useEffect(() => {
    if (Object.values(formErrors).every((e) => e === '') && isSubmit) {
      handleSection('address');
      storeUserInfo(formValue);
      handleIconsStatus('userInfo', 'completed');
    }
  }, [formErrors]);

  useEffect(() => {
    handleIconsStatus('userInfo', 'in-use');
    setFormValue(userInfo);
  }, []);

  return (
    <form className="user-identification-form" onSubmit={handleSubmit}>
      <div className="name-field-conatiner">
        <label htmlFor="name-field">
          <p>Nome</p>
          <input
            className={ formErrors.name !== '' ? 'text-fields input-error' : 'text-fields' }
            type="text"
            name="name"
            id="name-field"
            onChange={handleChange}
            value={formValue.name}
          />
          <p className="error-messages">{formErrors.name}</p>
        </label>
      </div>
      <section>
        <div className="passwords-conatiner">
          <div>
            <label htmlFor="password-field" className="password-input-label">
              <p>Senha</p>
              <input
                className={ formErrors.password !== '' ? 'text-fields input-error' : 'text-fields' }
                type={ showPassword ? 'text' : 'password' }
                name="password"
                id="password-field"
                onChange={handleChange}
                value={formValue.password}
              />
              <>
                {
                  showPassword
                    ? <AiFillEye className="eye-password-icon" onClick={toggleVisible} /> : (
                      <AiFillEyeInvisible className="eye-password-icon" onClick={toggleVisible} />
                    )
                }
              </>
            </label>
            <p className="error-messages">{formErrors.password}</p>
          </div>
          <div>
            <label htmlFor="check-password-field" className="password-input-label">
              <p>Confirmar Senha</p>
              <input
                className={
                  formErrors.checkPassword !== '' ? 'text-fields input-error' : 'text-fields'
                }
                type={ showPassword ? 'text' : 'password' }
                name="checkPassword"
                id="check-password-field"
                onChange={handleChange}
                value={formValue.checkPassword}
              />
              {
                showPassword
                  ? <AiFillEye className="eye-check-password-icon" onClick={toggleVisible} /> : (
                    <AiFillEyeInvisible
                      className="eye-check-password-icon"
                      onClick={toggleVisible}
                    />
                  )
              }
            </label>
            <p className="error-messages">{formErrors.checkPassword}</p>
          </div>
        </div>
        <div className="email-birthday-container">
          <div>
            <label htmlFor="email-field">
              <p>Email</p>
              <input
                className={ formErrors.email !== '' ? 'text-fields input-error' : 'text-fields' }
                type="text"
                name="email"
                id="email-field"
                onChange={handleChange}
                value={formValue.email}
              />
              <p className="error-messages">{formErrors.email}</p>
            </label>
          </div>
          <div>
            <label htmlFor="birthday-field">
              <p>Data de nascimento</p>
              <input
                className={ formErrors.birthday !== '' ? 'text-fields input-error' : 'text-fields' }
                type="text"
                name="birthday"
                id="birthday-field"
                onChange={handleChange}
                value={formValue.birthday}
              />
              <p className="error-messages">{formErrors.birthday}</p>
            </label>
          </div>
        </div>
      </section>
      <button className="next-btn next-btn-user-identification" type="submit">Próximo passo</button>
    </form>
  );
}

export default UserIdentification;

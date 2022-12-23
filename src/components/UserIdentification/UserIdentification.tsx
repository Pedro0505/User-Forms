import React, { ChangeEvent, useState } from 'react';
import IUserIdentificationForm from './interfaces/IUserIdentificationForm';
import userIdentificationSchema from './schema/userIndetificationSchama';
import './style.css';

function UserIdentification() {
  const intitialFormValue: IUserIdentificationForm = {
    name: '', password: '', checkPassword: '', email: '', birthday: '',
  };
  const [formValue, setFormValue] = useState<IUserIdentificationForm>(intitialFormValue);
  const [formErrors, setFormErrors] = useState<IUserIdentificationForm>(intitialFormValue);

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
  };

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
        <div>
          <label htmlFor="password-field">
            <p>Senha</p>
            <input
              className={ formErrors.password !== '' ? 'text-fields input-error' : 'text-fields' }
              type="text"
              name="password"
              id="password-field"
              onChange={handleChange}
              value={formValue.password}
            />
            <p className="error-messages">{formErrors.password}</p>
          </label>
          <label htmlFor="check-password-field">
            <p>Confirmar Senha</p>
            <input
              className={
                formErrors.checkPassword !== '' ? 'text-fields input-error' : 'text-fields'
              }
              type="text"
              name="checkPassword"
              id="check-password-field"
              onChange={handleChange}
              value={formValue.checkPassword}
            />
            <p className="error-messages">{formErrors.checkPassword}</p>
          </label>
        </div>
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
      </section>
      <button className="next-btn next-btn-user-identification" type="submit">Próximo passo</button>
    </form>
  );
}

export default UserIdentification;

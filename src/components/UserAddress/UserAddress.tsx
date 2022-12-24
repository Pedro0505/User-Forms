import axios from 'axios';
import React, { ChangeEvent, useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import IUserAddressForm from './interface/IUserAddressForm';
import userAddress from './schema/userAddress';
import './style.css';

function UserAddress() {
  const intitialFormValue: IUserAddressForm = {
    cep: '', street: '', houseNumber: '', district: '', city: '', reference: '',
  };
  const { handleSection } = useContext(UserContext);
  const [formValue, setFormValue] = useState<IUserAddressForm>(intitialFormValue);
  const [formErrors, setFormErrors] = useState<IUserAddressForm>(intitialFormValue);
  const [isValidCep, setIsValidCep] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValue((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
  };

  const validateCep = async (ceps: string) => {
    const validation = userAddress.cep.validate(ceps).error?.details[0].message || '';

    if (validation === '') {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${ceps}/json/`);

        if (!response.data.cep) {
          setIsValidCep(false);
          setFormErrors((prevState) => ({ ...prevState, cep: 'O cep passado é inválido' }));
        } else {
          setFormValue((prevState) => ({
            ...prevState,
            street: response.data.logradouro,
            district: response.data.bairro,
            city: response.data.localidade,
          }));

          setIsValidCep(true);
          setFormErrors((prevState) => ({ ...prevState, cep: '' }));
        }
      } catch (error) {
        setIsValidCep(false);
        setFormErrors((prevState) => ({ ...prevState, cep: 'O cep passado é inválido' }));
      }
    }
  };

  const validateForm = (values: IUserAddressForm) => {
    const { cep, city, district, houseNumber, reference, street } = userAddress;

    const errors = {
      cep: cep.validate(values.cep).error?.details[0].message || '',
      city: city.validate(values.city).error?.details[0].message || '',
      district: district.validate(values.district).error?.details[0].message || '',
      houseNumber: houseNumber.validate(values.houseNumber).error?.details[0].message || '',
      reference: reference.validate(values.reference).error?.details[0].message || '',
      street: street.validate(values.street).error?.details[0].message || '',
    };

    setFormErrors(errors);
    return Object.values(errors).every((e) => e === '');
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = validateForm(formValue);
    validateCep(formValue.cep);

    if (isValidCep && isValid) {
      handleSection('about');
    }
  };

  const handlePrevius = () => {
    const isValid = validateForm(formValue);

    validateCep(formValue.cep);
    if (isValid && isValidCep) {
      handleSection('info');
    }
  };

  return (
    <form className="user-address-form" onSubmit={handleSubmit}>
      <div className="cep-street-field">
        <label htmlFor="cep-field">
          <p>CEP</p>
          <input
            onChange={handleChange}
            onBlur={() => validateCep(formValue.cep)}
            className={ formErrors.cep !== '' ? 'text-fields input-error' : 'text-fields' }
            type="text"
            name="cep"
            id="cep-field"
            value={formValue.cep}
          />
          <p className="error-messages">{formErrors.cep}</p>
        </label>
        <label htmlFor="street-field">
          <p>Rua</p>
          <input
            onChange={handleChange}
            className={ formErrors.street !== '' ? 'text-fields input-error' : 'text-fields' }
            type="text"
            name="street"
            id="street-field"
            value={formValue.street}
          />
          <p className="error-messages">{formErrors.street}</p>
        </label>
      </div>
      <section className="house-number-district-city-field">
        <div className="house-number-district-field">
          <label htmlFor="house-number-field">
            <p>Número</p>
            <input
              onChange={handleChange}
              className={
                formErrors.houseNumber !== '' ? 'text-fields input-error' : 'text-fields'
              }
              type="text"
              name="houseNumber"
              id="house-number-field"
              value={formValue.houseNumber}
            />
            <p className="error-messages">{formErrors.houseNumber}</p>
          </label>
          <label htmlFor="district-field">
            <p>Bairro</p>
            <input
              onChange={handleChange}
              className={ formErrors.district !== '' ? 'text-fields input-error' : 'text-fields' }
              type="text"
              name="district"
              id="district-field"
              value={formValue.district}
            />
            <p className="error-messages">{formErrors.district}</p>
          </label>
        </div>
        <div className="city-container">
          <label htmlFor="city-field">
            <p>Cidade</p>
            <input
              onChange={handleChange}
              className={ formErrors.city !== '' ? 'text-fields input-error' : 'text-fields' }
              type="text"
              name="city"
              id="city-field"
              value={formValue.city}
            />
            <p className="error-messages">{formErrors.city}</p>
          </label>
        </div>
      </section>
      <div className="reference-field-container">
        <label htmlFor="reference-field">
          <p>Ponto de Referência</p>
          <input
            onChange={handleChange}
            className={ formErrors.reference !== '' ? 'text-fields input-error' : 'text-fields' }
            type="text"
            name="reference"
            id="reference-field"
            value={formValue.reference}
          />
          <p className="error-messages">{formErrors.reference}</p>
        </label>
      </div>
      <div className="next-previous-btn-address-container">
        <button
          className="previous-btn previous-btn-address"
          type="button"
          onClick={handlePrevius}
        >
            Anterior
        </button>
        <button className="next-btn next-btn-address" type="submit">Próximo passo</button>
      </div>
    </form>
  );
}

export default UserAddress;

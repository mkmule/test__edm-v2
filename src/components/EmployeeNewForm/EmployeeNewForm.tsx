import React, { FormEvent, useState } from 'react';

import './EmployeeNewForm.scss';
import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';
import { Employee } from '../../interfaces/employee';

interface Props {
  handleSubmit: (formData: Employee) => void;
}

export const EmployeeNewForm = ({ handleSubmit }: Props) => {
  const [company, setCompany] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [country, setCountry] = useState<string>('');

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSubmit({ company, contact, country });

    setCompany('');
    setContact('');
    setCountry('');
  }

  return (
    <div className="employee-new-form">
      <form className="employee-new-form__form" onSubmit={handleFormSubmit}>
        <div className="employee-new-form__form__inputs">
          <TextInput name="company" placeholder="Company" value={company}
                     fullWidth handleChange={setCompany} />
          <TextInput name="contact" placeholder="Contact" value={contact}
                     fullWidth handleChange={setContact} />
          <TextInput name="country" placeholder="Country" value={country}
                     fullWidth handleChange={setCountry} />
        </div>
        <div className="employee-new-form__form__actions">
          <Button type="submit" fullWidth>Add new</Button>
        </div>
      </form>
    </div>
  );
}

export default EmployeeNewForm;

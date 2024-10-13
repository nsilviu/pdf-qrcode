// StepContactDetails.js
import React from "react";
import { contactOptions } from "../constants";

const StepContactDetails = ({
  formData,
  handleInputChange,
  handleContactMethodChange,
  errors,
  loading,
}) => {
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedContactMethods = [...formData.contactMethod];

    if (checked) {
      updatedContactMethods.push(value);
    } else {
      updatedContactMethods = updatedContactMethods.filter(
        (method) => method !== value
      );
    }

    handleContactMethodChange(updatedContactMethods);
  };

  return (
    <div className="mb-4 text-center">
      <h1 className="text-xl pb-5">Date de contactare</h1>
      <div className="flex flex-col gap-4 p-5 items-center">
        <input
          type="text"
          name="firstName"
          placeholder="Prenume"
          value={formData.firstName}
          onChange={handleInputChange}
          required
          className="p-2 border w-full md:w-80"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Nume"
          value={formData.lastName}
          onChange={handleInputChange}
          required
          className="p-2 border w-full md:w-80"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Număr de telefon"
          value={formData.phone}
          onChange={handleInputChange}
          required
          pattern="\d{10}"
          title="Numărul de telefon trebuie să aibă 10 cifre"
          className="p-2 border w-full md:w-80"
        />
        <input
          type="email"
          name="email"
          placeholder="Adresă de email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="p-2 border w-full md:w-80"
        />

        {/* Multi-option contact method */}
        <div className="flex flex-col items-start w-full md:w-80">
          <label className="mb-2">
            Metoda de contact (selectați una sau mai multe):
          </label>
          {contactOptions.map((option) => (
            <label key={option.value} className="flex items-center">
              <input
                type="checkbox"
                name="contactMethod"
                value={option.value}
                checked={formData.contactMethod.includes(option.value)}
                onChange={handleCheckboxChange}
                className="form-checkbox"
              />
              <span className="ml-2">{option.label}</span>
            </label>
          ))}
        </div>

        <textarea
          name="message"
          placeholder="Mesaj"
          value={formData.message}
          onChange={handleInputChange}
          className="p-2 border w-full md:w-80"
        />
      </div>
      <div className="w-full md:w-80 mx-auto">
        <label className="flex p-2">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleInputChange}
            className="form-checkbox"
            required
          />
          <span
            className="ml-2 text-left align-text-top text-xs"
            style={{ fontWeight: 100 }}
          >
            Am citit Pagina de Protecția Datelor și, odată cu solicitarea mea,
            am luat la cunoștință prevederile acesteia.
          </span>
        </label>
      </div>
    </div>
  );
};

export default StepContactDetails;

import React, { useState } from "react";

export const formFields = [
  {
    label: "Name",
    type: "text",
    placeholder: "Enter your name",
    required: true,
    order: 1,
    id: "name",
  },
  {
    label: "Email",
    type: "email",
    placeholder: "Enter your E-Mail",
    required: true,
    order: 3,
    id: "email",
  },
  {
    label: "Age",
    type: "number",
    placeholder: "Enter your Age",
    required: false,
    order: 5,
    id: "age",
  },
  {
    label: "Favourite Color",
    type: "color",
    placeholder: "Enter your Color",
    required: false,
    order: 4,
    id: "color",
  },
  {
    label: "Father Name",
    type: "text",
    placeholder: "Enter your Father Name",
    required: true,
    order: 2,
    id: "fname",
  },
];

const DynamicForm = ({ handleSubmitForm }) => {
  let [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submission", formData);
    handleSubmitForm(formData);
  };

  const handleOnChnage = (e) => {
    // let id = e.target.id;
    // let value = e.target.value;

    let { id, value } = e.target;

    setFormData({
      ...formData,
      [id]: value,
    });
  };

  return (
    <>
      <h1>Dynamic Forms</h1>
      {/* name, email, age, color, submit(btn) */}
      <form onSubmit={handleSubmit}>
        {formFields.map((field) => {
          const { id, label, type, placeholder, required } = field; //deconstruction

          return (
            <div key={id}>
              <label htmlFor={id}>{label}: </label>
              <input
                type={type}
                id={id}
                placeholder={placeholder}
                required={required}
                onChange={handleOnChnage}
              />
            </div>
          );
        })}

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default DynamicForm;

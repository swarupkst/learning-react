import React, { useState } from 'react';

function MyForm() {
  const [formData, setFormData] = useState({ name: '', number: '', email: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};

    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required.';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      tempErrors.name = 'Please enter text only';
    }

    if (!formData.number.trim()) {
      tempErrors.number = 'Please enter the number.';
    } else if (!/^[0-9]+$/.test(formData.number)) {
      tempErrors.number = 'Please write a valid number.';
    }
    else if (formData.number.length !== 11) {
    tempErrors.number = 'Mobile number must be 11 digits long.';
    }
    else if (!/^01/.test(formData.number)) {
    tempErrors.number = 'Mobile number must start with 01.';
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid.';
    }

    return tempErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempErrors = validate();
    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');
    } else {
      console.log('Errors:', tempErrors);
    }
  };

  return (
    <div className='bg-green-200 m-10 p-10 rounded-4xl flex flex-col items-center'>
      <h1 className='text-4xl'>Form Handling</h1> <br />
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Input text'
          className='bg-yellow-300 px-5 py-2 rounded-2xl'
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="text-red-600">{errors.name}</p>}
        <br /> <br />
        <input
          type='number'
          name='number'
          placeholder='Input Number'
          className='bg-yellow-300 px-5 py-2 rounded-2xl'
          value={formData.number}
          onChange={handleChange}
        />
        {errors.number && <p className="text-red-600">{errors.number}</p>}
        <br /> <br />
        <input
          type='email'
          name='email'
          placeholder='Input Email'
          className='bg-yellow-300 px-5 py-2 rounded-2xl'
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-600">{errors.email}</p>}
        <br />
        <button
          type='submit'
          className='bg-amber-950 m-6 px-6 py-2 text-amber-50 rounded-3xl text-4xl'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default MyForm;

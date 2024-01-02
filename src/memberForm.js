import React, { useState } from 'react';
import './form.css'
const MemberForm = ({ page, data, onDataChange, onNext, onPrev }) => {


  const { name, email, roll } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    onDataChange({ ...data, [name]: value });
  };

  return (
    <section id="contact">
    <div className="contact-box">

    <div className="contact-links">
      <h2>REGISTER</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>

    <div className="contact-form-wrapper">
    <form>

      <h3>Enter Member-{page} Details Here:</h3>
      <div className="form-item">
        <input type="text" name="name" value={name} onChange={handleChange} required/>
        <label>Name:</label>
      </div>
      <div className="form-item">
        <input  type="email" name="email" value={email} onChange={handleChange} required />
        <label>Email:</label>
      </div>
      <div className="form-item">
        <input  type="text" name="roll" value={roll} onChange={handleChange} required />
        <label>Roll:</label>
      </div>
      <div className='buttons'>
        <button className="submit-btn" onClick={onPrev} disabled={!onPrev}>
          Previous
        </button>
        <button className="submit-btn" onClick={onNext}>Next</button>
      </div>
      </form>
      </div>
    
    </div>
    </section>
  );
};

export default MemberForm;



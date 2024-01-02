import React, { useState } from 'react';

const PaymentScreenshotForm = ({ onPrev, onSubmit }) => {
    const [paymentScreenshot, setPaymentScreenshot] = useState(null);
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setPaymentScreenshot(file);
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
    
          <h3>Upload Payment Screenshot</h3>
          <div className="form-item">
              <input type="file" accept="image/*" onChange={handleFileChange} />
              <label></label>
          </div>
          <div className='buttons'>
            
              <button className="submit-btn" onClick={onPrev}>Previous</button>
              <button className="submit-btn" onClick={() => onSubmit(paymentScreenshot)}>Submit</button>
           
          </div>
          </form>
          </div>
        
        </div>
        </section>
    );
  };

export default PaymentScreenshotForm;



import React, { useState } from 'react';
import MemberForm from './memberForm';
import PaymentScreenshotForm from './PaymentButton';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    member1: { name: '', email: '' , roll:''},
    member2: { name: '', email: '' , roll:''},
    member3: { name: '', email: '' , roll:''},
    member4: { name: '', email: '' , roll:''},
  });

  const handleNext = () => {
    // Validate fields before allowing the user to proceed
    const currentMemberData = formData[`member${step}`];
    if (!currentMemberData.name || !currentMemberData.email||!currentMemberData.roll) {
      alert('Please fill in all required fields before proceeding.');
      return;
    }

    if (step < 5) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const handleDataChange = (member, data) => {
    setFormData((prevData) => ({ ...prevData, [member]: data }));
  };

  const handleSubmit = (paymentScreenshot) => {
    // Handle submission logic here, including member data and payment screenshot
    console.log('Submitted:', formData, 'Payment Screenshot:', paymentScreenshot);
  };

  return (
    <div>
      {step === 1 && (
        <MemberForm
          page={step}
          data={formData.member1}
          onDataChange={(data) => handleDataChange('member1', data)}
          onNext={handleNext}
        />
      )}
      {step === 2 && (
        <MemberForm
          page={step}
          data={formData.member2}
          onDataChange={(data) => handleDataChange('member2', data)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {step === 3 && (
        <MemberForm
          page={step}
          data={formData.member3}
          onDataChange={(data) => handleDataChange('member3', data)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {step === 4 && (
        <MemberForm
          page={step}
          data={formData.member4}
          onDataChange={(data) => handleDataChange('member4', data)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {step === 5 && (
        <PaymentScreenshotForm onPrev={handlePrev} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default MultiStepForm;

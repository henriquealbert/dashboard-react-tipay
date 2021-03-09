import { useState } from 'react';
import Recover1 from './Recover1';
import Recover2 from './Recover2';

export default function RecoverPassword({ onClose }) {
  const [currentStep, setCurrentStep] = useState('1');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <>
      {currentStep === '1' ? (
        <Recover1
          setCurrentStep={setCurrentStep}
          setMessage={setMessage}
          setEmail={setEmail}
          onClose={onClose}
        />
      ) : currentStep === '2' ? (
        <Recover2
          setCurrentStep={setCurrentStep}
          message={message}
          email={email}
          onClose={onClose}
        />
      ) : (
        ''
      )}
    </>
  );
}

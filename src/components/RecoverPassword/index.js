import { Box } from '@chakra-ui/layout';
import { useState } from 'react';
import Recover1 from './Recover1';
import Recover2 from './Recover2';

export default function RecoverPassword(props) {
  const [currentStep, setCurrentStep] = useState('1');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Box w="100%">
      {currentStep === '1' ? (
        <Recover1
          setCurrentStep={setCurrentStep}
          setMessage={setMessage}
          setEmail={setEmail}
          {...props}
        />
      ) : currentStep === '2' ? (
        <Recover2
          setCurrentStep={setCurrentStep}
          message={message}
          email={email}
          {...props}
        />
      ) : (
        ''
      )}
    </Box>
  );
}

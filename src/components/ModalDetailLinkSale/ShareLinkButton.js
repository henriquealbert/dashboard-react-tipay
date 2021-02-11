import { Button } from '@chakra-ui/button';
import { CheckIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export default function ShareLinkButton({ url }) {
  const [copied, setCopy] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 5000);
  };

  return (
    <Button
      variant="green"
      w={{ base: '12rem', xxl: '17.25rem' }}
      h={{ base: '3.25rem', xxl: '4rem' }}
      fontSize="1.25rem"
      onClick={copyToClipboard}
    >
      {copied ? (
        <>
          Copiado! <CheckIcon ml="1rem" />
        </>
      ) : (
        'Compartilhar'
      )}
    </Button>
  );
}

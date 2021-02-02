import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { PrintIcon } from 'styles/icons';

export default function PrintBtn({ size, m, componentRef }) {
  const [loading, setLoading] = useState(false);

  const print = useReactToPrint({
    content: () => componentRef.current
  });

  const handlePrint = () => {
    if (!componentRef) return;
    setLoading(true);
    print();
    setLoading(false);
  };

  return (
    <Button
      variant="outline"
      isLoading={loading}
      loadingText="Imprimindo..."
      size={size}
      m={m}
      fontSize="1.25rem"
      onClick={handlePrint}
    >
      <PrintIcon mr="8px" />
      Imprimir
    </Button>
  );
}

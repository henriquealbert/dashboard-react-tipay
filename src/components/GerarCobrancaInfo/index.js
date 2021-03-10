import { Box, useDisclosure } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import FeeToClient from './FeeToClient';
import InfoCharge from './InfoCharge';
import ModalGenerateSale from './ModalGenerateSale';
import { useState } from 'react';
import { createRemoteLink } from 'api';

export default function GerarCobrancaInfo() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [link, setLink] = useState('');
  const [hasFee, setFee] = useState(false);
  const [calculatedFee, setCalculatedFee] = useState({
    value: '',
    value_to_receive: '',
    antifraud_fee: ''
  });

  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting }
  } = useForm({
    mode: 'onBlur'
  });

  const onSubmit = async (values) => {
    const obj = {
      description: values.description,
      amount: hasFee ? calculatedFee?.value_passing_fees : calculatedFee?.value,
      installment:
        values.installment_plan === '1'
          ? false
          : values.installment_plan === ''
          ? false
          : true,
      installment_plan: Number(values.installment_plan),
      has_limit: values.limit !== '' ? true : false,
      limit: Number(values.limit)
    };

    const res = await createRemoteLink(obj);
    if (res?.link) {
      setLink(res?.link);
      onOpen();
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <InfoCharge
        register={register}
        errors={errors}
        setCalculatedFee={setCalculatedFee}
        calculatedFee={calculatedFee}
      />
      <FeeToClient
        hasFee={hasFee}
        setFee={setFee}
        setCalculatedFee={setCalculatedFee}
        calculatedFee={calculatedFee}
      />
      <ModalGenerateSale
        link={link}
        isOpen={isOpen}
        onClose={onClose}
        isSubmitting={isSubmitting}
      />
    </Box>
  );
}

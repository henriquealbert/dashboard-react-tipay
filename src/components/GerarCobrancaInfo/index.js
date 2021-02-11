import { Box } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import FeeToClient from './FeeToClient';
import InfoCharge from './InfoCharge';
import ModalGenerateSale from './ModalGenerateSale';
import { useState } from 'react';
import api from 'api';

export default function GerarCobrancaInfo() {
  const [link, setLink] = useState('');
  const [isOpen, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting }
  } = useForm({
    mode: 'onBlur'
  });

  const onSubmit = async (values) => {
    const formattedAmount = values?.amount?.replace(/[^\d]/g, '');

    const obj = {
      description: values.description,
      amount: Number(formattedAmount),
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

    const response = await api.post('v1/link.json', { data: obj });
    if (response.status === 201) {
      setLink(response.data.link);
      setOpen(true);
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <InfoCharge register={register} errors={errors} />
      <FeeToClient register={register} errors={errors} />
      <ModalGenerateSale
        link={link}
        open={isOpen}
        isSubmitting={isSubmitting}
      />
    </Box>
  );
}

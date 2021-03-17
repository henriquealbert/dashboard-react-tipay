import { Box, Text, useDisclosure, useToast } from '@chakra-ui/react';
import { useState } from 'react';

import GerarBoletoModal from './GerarBoletoModal';
import InfoBoleto from './InfoBoleto';
import InfoClient from './InfoClient';
import JurosMora from './JurosMora';
import { useForm } from 'react-hook-form';
import { normalizeDateUTC } from 'utils/formatDate';
import { compareAsc, parseISO } from 'date-fns';
import { yupResolver } from '@hookform/resolvers/yup';
import { validations } from './validations';
import { createBoleto } from 'api';

export default function GerarBoletoInfo() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedBuyer, setSelectedBuyer] = useState(null);
  const [boletoData, setBoletoData] = useState(null);
  const toast = useToast();

  const {
    register,
    handleSubmit,
    errors,
    control,
    setError,
    formState: { isSubmitting }
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(validations)
  });

  const onSubmit = async (values) => {
    if (!selectedBuyer) {
      return;
    }

    // amount validations
    const formattedAmount = Number(values?.amount.replace(/[^\d]/g, ''));
    if (formattedAmount < 300) {
      setError('amount', {
        type: 'manual',
        message: 'Valor mínimo R$ 3,00'
      });
      window.scrollTo(0, 0);
      return;
    }
    if (formattedAmount > 100000) {
      setError('amount', {
        type: 'manual',
        message: 'Valor máximo R$ 1.000,00'
      });
      window.scrollTo(0, 0);
      return;
    }
    // mora validations
    const multa_mora = values?.multa_mora
      ? Number(values?.multa_mora.replace(/[^\d]/g, ''))
      : null;
    const juros_mora = values?.juros_mora
      ? Number(values?.juros_mora.replace(/[^\d]/g, ''))
      : null;
    if (juros_mora > 100) {
      setError('juros_mora', {
        type: 'manual',
        message: 'Máximo 1% ao mês'
      });
      window.scrollTo(0, 400);
      return;
    }
    if (multa_mora > 200) {
      setError('multa_mora', {
        type: 'manual',
        message: 'Máximo 2.00%'
      });
      window.scrollTo(0, 400);
      return;
    }

    if (multa_mora || juros_mora) {
      if (formattedAmount < 3000) {
        setError('amount', {
          type: 'manual',
          message: 'Para ter juros o valor deve ser no mínimo de R$ 30,00'
        });
        window.scrollTo(0, 0);
        return;
      }
    }

    // date validations
    const expiration_date = normalizeDateUTC(values?.expiration_date);
    const payment_limit_date = normalizeDateUTC(values?.payment_limit_date);
    if (
      compareAsc(
        parseISO(values?.payment_limit_date),
        parseISO(values?.expiration_date)
      ) === -1
    ) {
      setError('payment_limit_date', {
        type: 'manual',
        message: 'Deve ser maior ou igual a data de vencimento'
      });
      window.scrollTo(0, 0);
      return;
    }
    if (compareAsc(parseISO(values?.expiration_date), new Date()) === -1) {
      setError('expiration_date', {
        type: 'manual',
        message: 'Deve ser maior ou igual a data de hoje'
      });
      window.scrollTo(0, 0);
      return;
    }

    const formattedValues = {
      amount: formattedAmount,
      description: values?.description,
      expiration_date: expiration_date,
      payment_limit_date: payment_limit_date,
      multa_mora: multa_mora,
      juros_mora: juros_mora,
      buyer: {
        first_name: selectedBuyer?.first_name,
        last_name: selectedBuyer?.last_name,
        taxpayer_id: selectedBuyer?.taxpayer_id,
        email: selectedBuyer?.email,
        address: {
          street: selectedBuyer?.street,
          number: selectedBuyer?.number,
          complement: selectedBuyer?.complement,
          neighborhood: selectedBuyer?.neighborhood,
          city: selectedBuyer?.city,
          state: selectedBuyer?.state,
          postal_code: selectedBuyer?.postal_code
        }
      }
    };

    const res = await createBoleto(formattedValues);

    if (res?.error) {
      toast({
        title: 'Erro!',
        description: res?.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'bottom-right'
      });
    } else {
      setBoletoData(res);
      toast({
        title: 'Succeso!',
        description: 'Boleto criado com sucesso!',
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'bottom-right'
      });
      onOpen();
    }
  };

  return (
    <Box mt="2.25rem" w="100%">
      <Box as="form" onSubmit={handleSubmit(onSubmit)} id="gerar_boleto_form">
        <InfoBoleto register={register} control={control} errors={errors} />

        <JurosMora errors={errors} control={control} />
      </Box>

      <Box my="1.375rem" w="100%">
        <Text
          color="gray.500"
          fontSize="1.25rem"
          lineHeight="1.5rem"
          fontWeight="bold"
        >
          Informações do cliente
        </Text>

        <InfoClient
          selectedBuyer={selectedBuyer}
          setSelectedBuyer={setSelectedBuyer}
          errors={errors}
        />
      </Box>

      <GerarBoletoModal
        formId="gerar_boleto_form"
        isOpen={isOpen}
        onClose={onClose}
        isSubmitting={isSubmitting}
        selectedBuyer={selectedBuyer}
        data={boletoData}
      />
    </Box>
  );
}

import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/toast';
import { yupResolver } from '@hookform/resolvers/yup';
import { updateProfileInfo } from 'api';
import { useForm } from 'react-hook-form';
import { useQueryClient } from 'react-query';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required('Obrigatório.')
});

export default function EditName({ formId, onClose, setSubmit, data }) {
  const toast = useToast();
  const queryClient = useQueryClient();

  const { register, handleSubmit, errors } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: data?.name
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = async (values) => {
    setSubmit(true);
    const res = await updateProfileInfo(values);
    toast({
      title: res?.error ? 'Erro!' : 'Sucesso!',
      description: res?.message,
      status: res?.error ? 'error' : 'success',
      duration: 9000,
      isClosable: true,
      position: 'bottom-right'
    });
    queryClient.refetchQueries('Profile');
    setSubmit(false);
    onClose();
  };

  return (
    <Flex
      direction="column"
      as="form"
      id={formId}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Text fontSize="1.125rem" mb="2rem">
        Edite o nome que irá aparecer no sistema:
      </Text>
      <FormControl
        mr={{ md: '2rem' }}
        mb={{ base: '1rem', md: '' }}
        isInvalid={errors.name}
      >
        <FormLabel fontWeight="bold" htmlFor="name">
          Nome
        </FormLabel>
        <Input
          type="text"
          variant="innerSolid"
          name="name"
          id="name"
          ref={register}
        />
        <FormErrorMessage color="red.300">
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
    </Flex>
  );
}

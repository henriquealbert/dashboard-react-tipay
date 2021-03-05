import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button
} from '@chakra-ui/react';

export default function BuyerForm({
  setNewClient,
  padding,
  onClose,
  boxShadow,
  edit
}) {
  const handleClick = () => {
    if (setNewClient) {
      setNewClient(false);
    }
    if (!setNewClient) {
      onClose();
    }
  };

  return (
    <Box
      mt="0.75rem"
      boxShadow={boxShadow}
      borderRadius="0.625rem"
      w="100%"
      bg="white"
      p={padding ? padding : { base: '2rem', xlg: '3rem 4.25rem' }}
      direction={{ base: 'column', lg: 'row' }}
    >
      <Flex direction={{ base: 'column', lg: 'row' }}>
        <Box w={{ base: '100%', lg: '50%' }} mr={{ lg: '2rem', xlg: '7rem' }}>
          <Flex direction={{ base: 'column', md: 'row' }}>
            <FormControl mb="1.75rem">
              <FormLabel
                color="gray.1000"
                fontSize="1.25rem"
                lineHeight="1.5rem"
                fontWeight="semibold"
                htmlFor="first_name"
              >
                Nome
              </FormLabel>
              <Input
                type="text"
                variant="innerSolid"
                maxW="none"
                placeholder="Primeiro nome do cliente"
                name="first_name"
                id="first_name"
              />
            </FormControl>

            <FormControl mb="1.75rem" ml={{ base: '0', md: '1rem' }}>
              <FormLabel
                color="gray.1000"
                fontSize="1.25rem"
                lineHeight="1.5rem"
                fontWeight="semibold"
                htmlFor="last_name"
              >
                Sobrenome
              </FormLabel>
              <Input
                type="text"
                variant="innerSolid"
                maxW="none"
                placeholder="Sobrenome do cliente"
                name="last_name"
                id="last_name"
              />
            </FormControl>
          </Flex>

          <FormControl mb="1.75rem">
            <FormLabel
              color="gray.1000"
              fontSize="1.25rem"
              lineHeight="1.5rem"
              fontWeight="semibold"
            >
              CPF ou CNPJ
            </FormLabel>
            <Input
              type="text"
              variant="innerSolid"
              maxW="none"
              placeholder="Digite o numero do documento"
            />
          </FormControl>

          <FormControl mb={{ base: '1.75rem', lg: '0' }}>
            <FormLabel
              color="gray.1000"
              fontSize="1.25rem"
              lineHeight="1.5rem"
              fontWeight="semibold"
            >
              Email
            </FormLabel>
            <Input
              type="email"
              variant="innerSolid"
              maxW="none"
              placeholder="Digite o email"
            />
          </FormControl>
        </Box>
        <Box w={{ base: '100%', lg: '50%' }}>
          <Flex direction={{ base: 'column', lg: 'row' }}>
            <FormControl mb="1.75rem" mr="1.375rem">
              <FormLabel
                color="gray.1000"
                fontSize="1.25rem"
                lineHeight="1.5rem"
                fontWeight="semibold"
              >
                Endereço
              </FormLabel>
              <Input
                type="text"
                variant="innerSolid"
                maxW="none"
                placeholder="Nome da Rua"
                w="100%"
              />
            </FormControl>

            <FormControl mb="1.75rem" maxW={{ lg: '30%' }}>
              <FormLabel
                color="gray.1000"
                fontSize="1.25rem"
                lineHeight="1.5rem"
                fontWeight="semibold"
              >
                Número
              </FormLabel>
              <Input
                type="text"
                variant="innerSolid"
                maxW="none"
                placeholder="Nº"
                w="100%"
              />
            </FormControl>
          </Flex>

          <Flex direction={{ base: 'column', lg: 'row' }}>
            <FormControl mb="1.75rem" mr="1.375rem" maxW={{ lg: '50%' }}>
              <FormLabel
                color="gray.1000"
                fontSize="1.25rem"
                lineHeight="1.5rem"
                fontWeight="semibold"
              >
                Bairro
              </FormLabel>
              <Input
                type="text"
                variant="innerSolid"
                maxW="none"
                placeholder="Bairro"
              />
            </FormControl>
            <FormControl mb="1.75rem" maxW={{ lg: '50%' }}>
              <FormLabel
                color="gray.1000"
                fontSize="1.25rem"
                lineHeight="1.5rem"
                fontWeight="semibold"
              >
                Cidade
              </FormLabel>
              <Input
                type="text"
                variant="innerSolid"
                maxW="none"
                placeholder="Cidade"
              />
            </FormControl>
          </Flex>

          <Flex direction={{ base: 'column', lg: 'row' }}>
            <FormControl
              mr="1.375rem"
              maxW={{ lg: '50%' }}
              mb={{ base: '1.75rem', lg: '0' }}
            >
              <FormLabel
                color="gray.1000"
                fontSize="1.25rem"
                lineHeight="1.5rem"
                fontWeight="semibold"
              >
                Estado
              </FormLabel>
              <Input
                type="text"
                variant="innerSolid"
                maxW="none"
                placeholder="Estado"
              />
            </FormControl>
            <FormControl maxW={{ lg: '50%' }}>
              <FormLabel
                color="gray.1000"
                fontSize="1.25rem"
                lineHeight="1.5rem"
                fontWeight="semibold"
              >
                Complemento
              </FormLabel>
              <Input
                type="text"
                variant="innerSolid"
                maxW="none"
                placeholder="Complemento"
              />
            </FormControl>
          </Flex>
        </Box>
      </Flex>

      <Flex mt="2.625rem" justifyContent="flex-end">
        <Button
          variant="red"
          mr="1.375rem"
          h="4.5rem"
          w="13.75rem"
          onClick={handleClick}
        >
          Cancelar
        </Button>
        <Button
          variant="green"
          w="21rem"
          h="4.5rem"
          onClick={handleClick}
          isLoading={false}
          loadingText="Carregando..."
        >
          {edit ? 'Editar Cliente' : 'Cadastrar Cliente'}
        </Button>
      </Flex>
    </Box>
  );
}

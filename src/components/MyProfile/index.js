import { Box, Table, Tbody } from '@chakra-ui/react';

import ProfileEditable from './ProfileEditable';
import InfoEditable from './InfoEditable';

export default function MyProfile({ data }) {
  const formattedData = [
    {
      id: 2,
      title: 'CPF/CNPJ',
      description: data?.store?.cnpj
    },
    {
      id: 3,
      title: 'Endereço',
      description: `${data?.store?.street}, nº ${data?.store?.number}, ${data?.store?.district} - ${data?.store?.city}/${data?.store?.state} - CEP: ${data?.store?.cep}`
    },
    {
      id: 4,
      title: 'Telefone',
      description: data?.store?.cellphone
    },
    {
      id: 5,
      title: 'Conta bancária',
      description: `Conta: ${data?.bank_account?.account_number} - Agência: ${data?.bank_account?.bank_agency} - ${data?.bank_account?.bank_name}`
    }
  ];
  const avatar = {
    id: 1,
    name: data?.store?.name,
    img: null
  };

  return (
    <Box
      boxShadow="0rem 0.188rem 0.625rem #0000000A"
      borderRadius="0.625rem"
      bg="white"
      h="100%"
      w="100%"
      px={{ base: '2rem', lg: '3.625rem' }}
      py="2rem"
      mb="3.75rem"
    >
      <Box>
        <ProfileEditable item={avatar} />
        <Box overflowX="auto">
          <Table>
            <Tbody>
              {formattedData.map((item) => (
                <InfoEditable key={item.id} item={item} />
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
}

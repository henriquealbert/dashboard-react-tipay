import { Box, Table, Tbody } from '@chakra-ui/react';

import ProfileEditable from './ProfileEditable';
import InfoEditable from './InfoEditable';

export default function MyProfile({ data }) {
  const formattedData = [
    {
      id: 1,
      title: 'CPF/CNPJ',
      description: data?.store?.cnpj,
      editable: false
    },
    {
      id: 2,
      title: 'Telefone',
      description: data?.store?.cellphone,
      editable: false
    },
    {
      id: 3,
      title: 'Endereço',
      description: `${data?.store?.street}, nº ${data?.store?.number}, ${data?.store?.district} - ${data?.store?.city}/${data?.store?.state} - CEP: ${data?.store?.cep}`,
      editable: true
    },
    {
      id: 4,
      title: 'Conta bancária',
      description: `Nome/Razão Social: ${data?.bank_account?.holder_name} - ${
        data?.bank_account?.bank_name
      } - ${
        data?.bank_account?.bank_account_type === 1
          ? 'Conta corrente'
          : 'Conta poupança'
      } - Conta: ${data?.bank_account?.account_number} - Agência: ${
        data?.bank_account?.bank_agency
      }`,
      editable: true
    },
    {
      id: 5,
      title: 'Senha',
      description: '*****************',
      editable: true
    }
  ];
  const avatar = {
    id: 1,
    title: 'Nome',
    name: data?.store?.name,
    img: ''
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
        <ProfileEditable item={avatar} data={data} />
        <Box overflowX="auto">
          <Table>
            <Tbody>
              {formattedData.map((item) => (
                <InfoEditable key={item.id} item={item} data={data} />
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
}

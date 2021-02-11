import { Box, Table, Tbody } from '@chakra-ui/react';

import ProfileEditable from './ProfileEditable';
import InfoEditable from './InfoEditable';

export default function MyProfile({ profileData }) {
  const data = [
    {
      id: 2,
      title: 'CPF/CNPJ',
      description: profileData?.store?.cnpj
    },
    {
      id: 3,
      title: 'Endereço',
      description: `${profileData?.store?.street}, nº ${profileData?.store?.number}, ${profileData?.store?.district} - ${profileData?.store?.city}/${profileData?.store?.state} - CEP: ${profileData?.store?.cep}`
    },
    {
      id: 4,
      title: 'Telefone',
      description: profileData?.store?.cellphone
    },
    {
      id: 5,
      title: 'Conta bancária',
      description: `Conta: ${profileData?.bank_account?.account_number} - Agência: ${profileData?.bank_account?.bank_agency} - ${profileData?.bank_account?.bank_name}`
    }
  ];
  const avatar = {
    id: 1,
    name: profileData?.store?.name,
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
              {data.map((item) => (
                <InfoEditable key={item.id} item={item} />
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
}

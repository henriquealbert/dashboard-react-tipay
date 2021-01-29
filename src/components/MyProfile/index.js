import { Box, Table, Tbody } from '@chakra-ui/react';

import ProfileEditable from './ProfileEditable';
import InfoEditable from './InfoEditable';

export default function MyProfile() {
  const data = [
    {
      id: 2,
      title: 'CPF/CNPJ',
      description: '051.548.548-65'
    },
    {
      id: 3,
      title: 'Endereço',
      description: 'Rua Antônio Meireles sobrinho, 291 - Curitiba -PR'
    },
    {
      id: 4,
      title: 'Email',
      description: 'email@email.com'
    },
    {
      id: 5,
      title: 'Conta bancária',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
    }
  ];
  const avatar = {
    id: 1,
    name: 'Fulano de Tal',
    img: '/images/profile.jpg'
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

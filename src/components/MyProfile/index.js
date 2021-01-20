import { Box, Table, Tbody } from '@chakra-ui/react';

import ImgTr from './ImgTr';
import InfoTr from './InfoTr';

export default function MyProfile() {
  const data = [
    {
      id: Math.random() * 10,
      name: 'Fulano de Tal',
      img: '/images/profile.jpg'
    },
    {
      id: Math.random() * 10,
      title: 'cpf',
      description: '051.548.548-65'
    },
    {
      id: Math.random() * 5,
      title: 'Endereço',
      description: 'Rua Antônio Meireles sobrinho, 291 - Curitiba -PR'
    },
    {
      id: Math.random() * 2,
      title: 'Lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
    },
    {
      id: Math.random() * 1,
      title: 'Lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
    },
    {
      id: Math.random() * 3,
      title: 'Lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
    },
    {
      id: Math.random() * 7,
      title: 'Lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
      border: 'none'
    }
  ];
  return (
    <Box
      boxShadow="0rem 0.188rem 10px #0000000A"
      borderRadius="10px"
      bg="white"
      h="100%"
      w="100%"
      px="58px"
      py="2rem"
    >
      <Table size="lg">
        <Tbody>
          {data.map((item) => {
            if (item.name) {
              return <ImgTr key={item.id} item={item} />;
            } else {
              return <InfoTr key={item.id} item={item} />;
            }
          })}
        </Tbody>
      </Table>
    </Box>
  );
}

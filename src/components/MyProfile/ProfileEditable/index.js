import { Flex, Box, Text } from '@chakra-ui/react';
import ModalEditInfo from 'components/ModalEditInfo';
import ProfilePic from '../ProfilePic';

const ProfileEditable = ({ item, buyer, data }) => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      justifyContent={{ md: 'space-between' }}
      w="100%"
      borderBottom="1px solid"
      borderColor="gray.1100"
      pb={{ base: '2rem', md: '0' }}
    >
      <Flex alignItems="center" py={{ base: '0', md: '1.875rem' }}>
        <Box
          w={{ base: '12rem', lg: '16.25rem' }}
          fontWeight="bold"
          fontSize="1.25rem"
          color="gray.900"
          textTransform="uppercase"
        >
          <ProfilePic data={item} buyer={buyer} />
        </Box>
        <Box fontSize="1.375rem">
          <Text
            color="gray.900"
            fontSize={
              buyer ? { base: '1rem' } : { base: '1rem', md: '1.25rem' }
            }
            lineHeight="1.5rem"
            fontWeight="bold"
            textTransform="uppercase"
          >
            {item?.title}
          </Text>
          <Text
            color="gray.900"
            fontSize={
              buyer
                ? { base: '1.25rem', md: '1.5rem' }
                : { base: '1.75rem', md: '2.5rem' }
            }
            fontWeight="bold"
          >
            {item?.name}
          </Text>
        </Box>
      </Flex>

      <ModalEditInfo item={item} data={data} />
    </Flex>
  );
};

export default ProfileEditable;

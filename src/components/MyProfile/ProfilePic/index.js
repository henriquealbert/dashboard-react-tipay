import { Box, Avatar, Button } from '@chakra-ui/react';

export default function ProfilePic({ data, buyer }) {
  return (
    <Box>
      <Button
        variant="link"
        fontSize="1.25rem"
        color="brand.yellow"
        display="block"
      >
        Editar
      </Button>
      <Avatar
        ml="1.25rem"
        src={data?.img}
        alt={data?.name}
        w={
          buyer
            ? { base: '6rem', lg: '8rem' }
            : { base: '8rem', lg: '10.625rem' }
        }
        h={
          buyer
            ? { base: '6rem', lg: '8rem' }
            : { base: '8rem', lg: '10.625rem' }
        }
        bg="gray.100"
      />
    </Box>
  );
}

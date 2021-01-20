import { Box, Avatar, Button } from '@chakra-ui/react';

export default function ProfilePic({ data }) {
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
        w="10.625rem"
        h="10.625rem"
        borderRadius="50%"
        bg="gray.100"
      />
    </Box>
  );
}

import { Box, Avatar, Button } from '@chakra-ui/react';

export default function ProfilePic({ data }) {
  return (
    <Box>
      <Button
        variant="link"
        fontSize="20px"
        color="brand.yellow"
        display="block"
      >
        Editar
      </Button>
      <Avatar
        ml="20px"
        src={data?.img}
        alt={data?.name}
        w="170px"
        h="170px"
        borderRadius="50%"
        bg="gray.100"
      />
    </Box>
  );
}

import { Flex, Text, Box } from '@chakra-ui/react';
import {
  DocumentIcon,
  EmailIcon,
  FrenteIcon,
  SelfieIcon,
  VersoIcon
} from 'styles/icons';
import DocumentSubmit from './DocumentSubmit';

export default function SendDocument({
  title,
  description,
  noBorder,
  docType
}) {
  return (
    <Flex
      py="2rem"
      borderBottom={noBorder ? '' : '1px solid'}
      borderColor="gray.1100"
      justifyContent={{ md: 'space-between' }}
      direction={{ base: 'column', md: 'row' }}
    >
      <Box>
        <Text
          fontSize="1.25rem"
          color="gray.500"
          fontWeight="bold"
          textTransform="uppercase"
        >
          {title}
        </Text>
        <Text fontSize="1.25rem" maxW="650px">
          {description}
        </Text>
      </Box>

      <Box mt={{ base: '2rem', md: '0' }}>
        {docType === 'rg' ? (
          <Flex direction={{ base: 'row', md: 'column', xlg: 'row' }}>
            <DocumentSubmit
              label="Frente"
              icon={FrenteIcon}
              mr={{ base: '2rem', md: '0', xlg: '2rem' }}
              mb={{ base: '0', md: '1rem', xlg: '0' }}
            />
            <DocumentSubmit label="Verso" icon={VersoIcon} />
          </Flex>
        ) : docType === 'selfie' ? (
          <DocumentSubmit icon={SelfieIcon} />
        ) : docType === 'residencia' ? (
          <DocumentSubmit icon={EmailIcon} />
        ) : docType === 'atividade' ? (
          <DocumentSubmit icon={DocumentIcon} />
        ) : (
          ''
        )}
      </Box>
    </Flex>
  );
}

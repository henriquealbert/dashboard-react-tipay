import { Button } from '@chakra-ui/button';
import { SearchIcon } from '@chakra-ui/icons';

export default function ShareLinkButton({ url, label, ...props }) {
  return (
    <Button
      as="a"
      target="_blank"
      rel="noreferrer"
      href={url}
      variant="green"
      w={{ base: '12rem', xxl: '17.25rem' }}
      h={{ base: '3.25rem', xxl: '4rem' }}
      fontSize={{ base: '1rem', xxl: '1.25rem' }}
      {...props}
    >
      {label} <SearchIcon ml="0.5rem" w={4} h={4} />
    </Button>
  );
}
